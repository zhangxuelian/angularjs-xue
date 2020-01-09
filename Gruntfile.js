var _ = require('lodash');
module.exports = function(grunt){
    grunt.util.linefeed = '\n';
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        ngversion: '1.2.21',
        modules: [],//to be filled in by build task
        pkg: grunt.file.readJSON('package.json'),
        dist: 'dist',
        filename: 'angularjs-xue',
        banner: [
            '/**',
            ' * <%= pkg.name %>',
            ' * <%= pkg.homepage %>',
            ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
            ' * License: <%= pkg.license %>',
            ' */\n'
        ].join('\n'),
        html2js: {
            dist: {
                options: {
                  module: null, // no bundle module for all the html2js templates
                  base: '.',
                  rename: function(moduleName) {
                    return `uib/${moduleName}`;
                  }
                },
                files: [{
                  expand: true,
                  src: ['template/**/*.html'],
                  ext: '.html.js'
                }]
            }
        },
        meta: {
            modules: 'angular.module("ui.xue", [<%= srcModules %>]);',
            tplmodules: 'angular.module("ui.xue.tpls", [<%= tplModules %>]);',
            all: 'angular.module("ui.xue", ["ui.xue.tpls", <%= srcModules %>]);',
            cssInclude: '',
            cssFileBanner: '/* Include this file in your html if you are using the CSP mode. */\n\n',
            cssFileDest: '<%= dist %>/<%= filename %>-<%= pkg.version %>-csp.css',
            banner: [
              '/**',
              ' * <%= pkg.name %>',
              ' * <%= pkg.homepage %>',
              ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
              ' * License: <%= pkg.license %>',
              ' */\n'
            ].join('\n')
        },
        concat: {
            dist: {
              options: {
                banner: '<%= meta.banner %><%= meta.modules %>\n',
                footer: '<%= meta.cssInclude %>'
              },
              src: [], //src filled in by build task
              dest: '<%= dist %>/<%= filename %>-<%= pkg.version %>.js'
            },
            dist_tpls: {
              options: {
                banner: '<%= meta.banner %><%= meta.all %>\n<%= meta.tplmodules %>\n',
                footer: '<%= meta.cssInclude %>'
              },
              src: [], //src filled in by build task
              dest: '<%= dist %>/<%= filename %>-tpls-<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
              banner: '<%= meta.banner %>'
            },
            dist:{
              src:['<%= concat.dist.dest %>'],
              dest:'<%= dist %>/<%= filename %>-<%= pkg.version %>.min.js'
            },
            dist_tpls:{
              src:['<%= concat.dist_tpls.dest %>'],
              dest:'<%= dist %>/<%= filename %>-tpls-<%= pkg.version %>.min.js'
            }
        }
    });

    var util = {
        foundModules: {},
        breakup: function(text, separator){
            return text.replace(/[A-Z]/g, function (match) {
                return separator + match;
            });
        },
        ucwords: function(text){
            return text.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        },
        enquote: function(str){
            return `"${str}"`;
        },
        enquoteUibDir: function(str){
            return util.enquote(`uib/${str}`);
        },
        dependenciesForModule: function(name){
            var deps = [],self = this;
            grunt.file.expand([`src/${name}/*.js`, `!src/${name}/index.js`, `!src/${name}/index-nocss.js`])
            .map(grunt.file.read)
            .forEach(function(contents) {
                //Strategy: find where module is declared,
                //and from there get everything inside the [] and split them by comma
                var moduleDeclIndex = contents.indexOf('angular.module(');
                var depArrayStart = contents.indexOf('[', moduleDeclIndex);
                var depArrayEnd = contents.indexOf(']', depArrayStart);
                var dependencies = contents.substring(depArrayStart + 1, depArrayEnd);
                dependencies.split(',').forEach(function(dep) {
                    if (dep.indexOf('ui.xue.') > -1) {
                        var depName = dep.trim().replace('ui.xue.','').replace(/['"]/g,'');
                        if (deps.indexOf(depName) < 0) {
                            deps.push(depName);
                            //Get dependencies for this new dependency
                            deps = deps.concat(self.dependenciesForModule(depName));
                        }
                    }
                });
            });
            return deps;
        },
        processCSS: function(moduleName, state, minify, file){
            var css = fs.readFileSync(file).toString(),
            js;
            state.css.push(css);

            if (minify) {
            css = css
                .replace(/\r?\n/g, '')
                .replace(/\/\*.*?\*\//g, '')
                .replace(/:\s+/g, ':')
                .replace(/\s*\{\s*/g, '{')
                .replace(/\s*\}\s*/g, '}')
                .replace(/\s*\,\s*/g, ',')
                .replace(/\s*\;\s*/g, ';');
            }
            //escape for js
            css = css
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")
            .replace(/\r?\n/g, '\\n');
            js = `angular.module('ui.xue.${moduleName}').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uib${_.capitalize(moduleName)}Css && angular.element(document).find('head').prepend('<style type="text/css">${css}</style>'); angular.$$uib${_.capitalize(moduleName)}Css = true; });`;
            state.js.push(js);

            return state;
        },
        findModule: function(name){
            var self = this;
            if (self.foundModules[name]) { return; }
            self.foundModules[name] = true;
            var module = {
                name: name,
                moduleName: self.enquote(`ui.xue.${name}`),
                displayName: self.ucwords(self.breakup(name, ' ')),
                srcFiles: grunt.file.expand([`src/${name}/*.js`, `!src/${name}/index.js`, `!src/${name}/index-nocss.js`]),
                cssFiles: grunt.file.expand(`src/${name}/*.css`),
                tplFiles: grunt.file.expand(`template/${name}/*.html`),
                tpljsFiles: grunt.file.expand(`template/${name}/*.html.js`),
                tplModules: grunt.file.expand(`template/${name}/*.html`).map(self.enquoteUibDir),
                dependencies: [], //self.dependenciesForModule(name)
                docs: {
                    md: grunt.file.expand(`src/${name}/docs/*.md`)
                        .map(grunt.file.read).map((str) => marked(str)).join('\n'),
                    js: grunt.file.expand(`src/${name}/docs/*.js`)
                        .map(grunt.file.read).join('\n'),
                    html: grunt.file.expand(`src/${name}/docs/*.html`)
                        .map(grunt.file.read).join('\n')
                }
            };
            var styles = {
                css: [],
                js: []
            };
            module.cssFiles.forEach(self.processCSS.bind(null, module.name, styles, true));
            if (styles.css.length) {
                module.css = styles.css.join('\n');
                module.cssJs = styles.js.join('\n');
            }
            module.dependencies.forEach(self.findModule);
            grunt.config('modules', grunt.config('modules').concat(module));
        },
        pluck: function(array,key){
            return array.map(function(obj) {
                return obj[key];
            });
        }
    };

    grunt.registerTask('default', ['html2js','build']);
    grunt.registerTask('build','Create bootstrap build files',function(){
        grunt.file.expand({
            filter: 'isDirectory', cwd: '.'
        }, 'src/*').forEach((dir) => {
            util.findModule(dir.split('/')[1]);
        });
        var modules = grunt.config('modules');
        grunt.config('srcModules', util.pluck(modules, 'moduleName'));
        grunt.config('tplModules', util.pluck(modules, 'tplModules').filter((tpls) => tpls.length > 0));
        grunt.config('demoModules', modules
            .filter((module) => module.docs.md && module.docs.js && module.docs.html)
            .sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        );
        var cssStrings = _.flatten(_.compact(util.pluck(modules, 'css')));
        var cssJsStrings = _.flatten(_.compact(util.pluck(modules, 'cssJs')));
        if (cssStrings.length) {
            grunt.config('meta.cssInclude', cssJsStrings.join('\n'));
      
            grunt.file.write(grunt.config('meta.cssFileDest'), grunt.config('meta.cssFileBanner') +
                             cssStrings.join('\n'));
      
            grunt.log.writeln('File ' + grunt.config('meta.cssFileDest') + ' created');
        }

        var moduleFileMapping = _.clone(modules, true);
        moduleFileMapping.forEach((module) => delete module.docs);

        grunt.config('moduleFileMapping', moduleFileMapping);

        var srcFiles = util.pluck(modules, 'srcFiles');
        var tpljsFiles = util.pluck(modules, 'tpljsFiles');

        grunt.config('concat.dist.src', grunt.config('concat.dist.src')
            .concat(srcFiles));
        grunt.config('concat.dist_tpls.src', grunt.config('concat.dist_tpls.src')
            .concat(srcFiles).concat(tpljsFiles));

        grunt.task.run(['concat', 'uglify']);
        //, 'makeModuleMappingFile', 'makeRawFilesJs', 'makeVersionsMappingFile'

    });
    
}