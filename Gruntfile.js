var _ = require('lodash');
var sass = require('node-sass');
var fs = require('fs');
var marked = require('marked');
module.exports = function (grunt) {
    grunt.util.linefeed = '\n';
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        version: '<%= pkg.version %>',
        ngversion: '1.2.32',
        debug: false,
        modules: [],//to be filled in by build task
        uiModules: [],
        pkg: grunt.file.readJSON('package.json'),
        dist: 'dist',
        filename: 'angularjs-xue',
        banner: [
            '/**',
            ' * <%= pkg.name %>',
            ' * Homepage: <%= pkg.homepage %>',
            ' * ',
            ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
            ' * Require angularjs version: <%= ngversion %>',
            ' * License: <%= pkg.license %>',
            ' */\n'
        ].join('\n'),
        html2js: {
            dist: {
                options: {
                    module: null, // no bundle module for all the html2js templates
                    base: '.',
                    rename: function (moduleName) {
                        return `xue/${moduleName}`;
                    }
                },
                files: [{
                    expand: true,
                    src: ['template/**/*.html'],
                    ext: '.html.js'
                }]
            }
        },
        eslint: {
            files: ['src/**/*.js', 'src/**/test/*.js', '!src/**/lodash/*.js']
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['src/**/css/*.scss', 'src/ui/*.ui.scss', 'misc/demo/assets/*.scss'],
                    ext: '.css'
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
            banner: '<%= banner %>'
        },
        concat: {
            /* dist: {
                options: {
                    banner: '<%= meta.banner %><%= meta.modules %>\n',
                    footer: '<%= meta.cssInclude %>'
                },
                src: [],
                dest: '<%= dist %>/<%= filename %>-<%= pkg.version %>.js'
            }, */
            dist_tpls: {
                options: {
                    banner: '<%= meta.banner %><%= meta.all %>\n<%= meta.tplmodules %>\n',
                    footer: '<%= meta.cssInclude %>'
                },
                src: [], //src filled in by build task
                dest: '<%= dist %>/<%= filename %>-full-<%= pkg.version %>.js'
            },
            dist_css: {
                src: ['src/ui/xue.css'],
                dest: '<%= dist %>/<%= filename %>-ui-<%= pkg.version %>.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            /* dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: '<%= dist %>/<%= filename %>-<%= pkg.version %>.min.js'
            }, */
            dist_tpls: {
                src: ['<%= concat.dist_tpls.dest %>'],
                dest: '<%= dist %>/<%= filename %>-full-<%= pkg.version %>.min.js'
            }
        },
        cssmin: {
            dist_css: {
                src: ['<%= concat.dist_css.dest %>'],
                dest: '<%= dist %>/<%= filename %>-ui-<%= pkg.version %>.min.css'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: ['fonts/*'],
                    cwd: 'src/ui/icon_font',
                    dest: 'dist/'
                }, {
                    expand: true,
                    src: ['data/*'],
                    cwd: 'misc',
                    dest: 'dist/'
                }]
            },
            demohtml: {
                options: {
                    process: grunt.template.process
                },
                files: [{
                    expand: true,
                    src: ['**/*.html'],
                    cwd: 'misc/demo/',
                    dest: 'demo/'
                }]
            },
            demoassets: {
                files: [{
                    expand: true,
                    //Don't re-copy html files, we process those
                    src: ['**/**/*', '!**/*.html'],
                    cwd: 'misc/demo',
                    dest: 'demo/'
                }]
            },
            demodist: {
                files: [{
                    expand: true,
                    src: ['*.min.*', 'fonts/*', 'data/*'],
                    cwd: 'dist',
                    dest: 'demo/assets/'
                }]
            },
            demosrc: {
                files: [{
                    expand: true,
                    src: ['*.js', '*.css', 'fonts/*', 'data/*'],
                    cwd: 'dist',
                    dest: 'demo/assets/'
                }]
            }
        },
        'ddescribe-iit': {
            files: [
                'src/**/test/*.spec.js'
            ]
        },
        conventionalChangelog: {
            options: {
                changelogOpts: {
                    preset: 'angular'
                },
                templateFile: 'misc/changelog.tpl.md'
            },
            release: {
                src: 'CHANGELOG.md'
            }
        },
        shell: {
            //We use %version% and evaluate it at run-time, because <%= pkg.version %>
            //is only evaluated once
            'release-prepare': [
                'grunt enforce eslint sass html2js build cssmin copy',
                'grunt version', //remove "-SNAPSHOT"
                'grunt conventionalChangelog'
            ],
            'release-complete': [
                'git commit CHANGELOG.md package.json -m "chore(release): v%version%"',
                'git tag %version%'
            ],
            'release-start': [
                'grunt version:minor:"SNAPSHOT"',
                'git commit package.json -m "chore(release): Starting v%version%"'
            ]
        },
        connect: {
            server1: {
                options: {
                    port: 8081,
                    livereload: 35729,
                    open: true,
                    base: {
                        path: 'demo',
                        options: {
                            index: 'index.html'
                        }
                    },
                }
            },
            server2: {
                options: {
                    port: 8082,
                    livereload: 35730,
                    open: true,
                    base: {
                        path: 'demo',
                        options: {
                            index: 'index.html'
                        }
                    },
                }
            }
        },
        watch: {
            livereload1: {
                options: {
                    livereload: 35729
                },
                files: ['template/**/*.html', 'src/**/*.*', 'misc/demo/**/*.*'],
                tasks: ['demo']
            },
            livereload2: {
                options: {
                    livereload: 35730
                },
                files: ['template/**/*.html', 'src/**/*.*', 'misc/demo/**/*.*'],
                tasks: ['test-demo']
            }
        }
    });

    var util = {
        foundModules: {},
        breakup: function (text, separator) {
            return text.replace(/[A-Z]/g, function (match) {
                return separator + match;
            });
        },
        ucwords: function (text) {
            return text.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        },
        enquote: function (str) {
            return `"${str}"`;
        },
        enquoteUibDir: function (str) {
            return util.enquote(`xue/${str}`);
        },
        dependenciesForModule: function (name) {
            var deps = [], self = this, namePathArr = name.split("."), fileExpand = [];
            if (namePathArr.length == 1) {
                fileExpand = [`src/${name}/${name}.js`, `!src/${name}/index.js`, `!src/${name}/index-nocss.js`];
            } else if (namePathArr.length == 2) {
                fileExpand = [`src/${namePathArr[0]}/${namePathArr[1]}.js`];
            } else {
                return deps;
            }
            grunt.file.expand(fileExpand)
                .map(grunt.file.read)
                .forEach(function (contents) {
                    //Strategy: find where module is declared,
                    //and from there get everything inside the [] and split them by comma
                    var moduleDeclIndex = contents.indexOf('angular.module(');
                    var depArrayStart = contents.indexOf('[', moduleDeclIndex);
                    var depArrayEnd = contents.indexOf(']', depArrayStart);
                    var dependencies = contents.substring(depArrayStart + 1, depArrayEnd);
                    dependencies.split(',').forEach(function (dep) {
                        if (dep.indexOf('xue.') > -1) {
                            var depName = dep.trim().replace('xue.', '').replace(/['"]/g, '');
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
        processCSS: function (moduleName, state, minify, file) {
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
            js = `angular.module('xue.${moduleName}').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uib${_.capitalize(moduleName)}Css && angular.element(document).find('head').prepend('<style type="text/css">${css}</style>'); angular.$$uib${_.capitalize(moduleName)}Css = true; });`;
            state.js.push(js);

            return state;
        },
        findModule: function (name) {
            if (name == 'ui') { return; }
            util.foundModules[name] = true;
            var module = {
                name: name,
                moduleName: util.enquote(`xue.${name}`),
                displayName: util.ucwords(util.breakup(name, ' ')),
                srcFiles: grunt.file.expand([`src/${name}/*.js`, `!src/${name}/index.js`, `!src/${name}/index-nocss.js`]),
                cssFiles: grunt.file.expand(`src/${name}/css/*.css`),
                tplFiles: grunt.file.expand(`template/${name}/*.html`),
                tpljsFiles: grunt.file.expand(`template/${name}/*.html.js`),
                tplModules: grunt.file.expand(`template/${name}/*.html`).map(util.enquoteUibDir),
                dependencies: util.dependenciesForModule(name),
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
            module.cssFiles.forEach(util.processCSS.bind(null, module.name, styles, true));
            if (styles.css.length) {
                module.css = styles.css.join('\n');
                module.cssJs = styles.js.join('\n');
            }
            module.dependencies.forEach(util.findModule);
            grunt.config('modules', grunt.config('modules').concat(module));
        },
        pluck: function (array, key) {
            return array.map(function (obj) {
                return obj[key];
            });
        },
        mergeToObject: function (arr1, arr2) {
            var map = new Object();
            arr1.forEach(function (value, index) {
                if (arr2[index]) {
                    map[value] = arr2[index];
                }
            });
            return map;
        },
        setVersion: function (type, suffix) {
            var file = 'package.json';
            var VERSION_REGEX = /([\'|\"]version[\'|\"][ ]*:[ ]*[\'|\"])([\d|.]*)(-\w+)*([\'|\"])/;
            var contents = grunt.file.read(file);
            var version;
            contents = contents.replace(VERSION_REGEX, function (match, left, center) {
                version = center;
                if (type) {
                    version = require('semver').inc(version, type);
                }
                //semver.inc strips our suffix if it existed
                if (suffix) {
                    version += '-' + suffix;
                }
                return left + version + '"';
            });
            grunt.log.ok('Version set to ' + version.cyan);
            grunt.file.write(file, contents);
            return version;
        }
    };

    grunt.registerTask('default', ['enforce', 'delFiles', /* 'ddescribe-iit', */  'eslint', 'sass', 'html2js', 'karma', 'build', 'cssmin', 'justDemo']);
    grunt.registerTask('enforce', `Install commit message enforce script if it doesn't exist`, function () {
        if (!grunt.file.exists('.git/hooks/commit-msg')) {
            grunt.file.copy('misc/validate-commit-msg.js', '.git/hooks/commit-msg');
            require('fs').chmodSync('.git/hooks/commit-msg', '0755');
        }
    });
    grunt.registerTask('delFiles', function () {
        if (grunt.file.exists('dist')) {
            grunt.file.delete('dist');
        }
        if (grunt.file.exists('demo')) {
            grunt.file.delete('demo');
        }
    });
    grunt.registerTask('build', 'Create bootstrap build files', function () {
        grunt.config('readMd', grunt.file.expand(`README.md`)
            .map(grunt.file.read).map((str) => marked(str)).join('\n'));
        grunt.file.expand({
            filter: 'isDirectory', cwd: '.'
        }, 'src/*').forEach((dir) => {
            util.findModule(dir.split('/')[1]);
        });
        var modules = grunt.config('modules');
        grunt.config('modules', _.uniqBy(modules, 'name'));
        modules = grunt.config('modules');
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

            /* grunt.file.write(grunt.config('meta.cssFileDest'), grunt.config('meta.cssFileBanner') +
                cssStrings.join('\n'));

            grunt.log.writeln('File ' + grunt.config('meta.cssFileDest') + ' created'); */
        }

        var moduleFileMapping = _.cloneDeep(modules);
        moduleFileMapping.forEach((module) => delete module.docs);

        grunt.config('moduleFileMapping', moduleFileMapping);

        var srcFiles = util.pluck(modules, 'srcFiles');
        var tpljsFiles = util.pluck(modules, 'tpljsFiles');

        /* grunt.config('concat.dist.src', grunt.config('concat.dist.src')
            .concat(srcFiles)); */
        var toolJsSrc = grunt.file.expand('misc/tool/*.js');
        grunt.config('concat.dist_tpls.src', toolJsSrc.concat(grunt.config('concat.dist_tpls.src')
            .concat(srcFiles).concat(tpljsFiles)));
        grunt.task.run(['concat', 'uglify', 'copy:dist', 'makeModuleMappingFile', 'makeRawFilesJs', 'makeVersionsMappingFile']);

    });
    grunt.registerTask('build-ui', function () {
        grunt.file.expand('src/ui/docs/*').forEach((dir) => {
            var name = dir.split('/')[3];
            var module  = {
                name: name,
                moduleName: name,
                displayName: util.ucwords(util.breakup(name, ' ')),
                docs: {
                    md: grunt.file.expand(`src/ui/docs/${name}/*.md`)
                        .map(grunt.file.read).map((str) => marked(str)).join('\n'),
                    html: grunt.file.expand(`src/ui/docs/${name}/*.html`)
                        .map(grunt.file.read).join('\n')
                }
            };
            grunt.config('uiModules', grunt.config('uiModules').concat(module));
        });
    });
    grunt.registerTask('demo', ['delFiles', 'sass', 'html2js', 'build', 'cssmin', 'build-ui','copy:demohtml', 'copy:demoassets', 'copy:demodist']);
    grunt.registerTask('test-demo', function () {
        grunt.config('debug', true);
        grunt.task.run(['delFiles', 'sass', 'html2js', 'build', 'cssmin', 'build-ui','copy:demohtml', 'copy:demoassets', 'copy:demosrc']);
    });
    grunt.registerTask('justDemo', ['build-ui','copy:demohtml', 'copy:demoassets', 'copy:demodist']);
    grunt.registerTask('makeModuleMappingFile', function () {
        var moduleMappingJs = 'demo/assets/module-mapping.json';
        var moduleMappings = grunt.config('moduleFileMapping');
        var moduleMappingsMap = util.mergeToObject(util.pluck(moduleMappings, 'name'), moduleMappings);
        var jsContent = JSON.stringify(moduleMappingsMap);
        grunt.file.write(moduleMappingJs, jsContent);
        grunt.log.writeln('File ' + moduleMappingJs.cyan + ' created.');
    });

    grunt.registerTask('makeRawFilesJs', function () {
        var jsFilename = 'demo/assets/raw-files.json';
        var genRawFilesJs = require('./misc/raw-files-generator');

        genRawFilesJs(grunt, jsFilename, _.flatten(grunt.config('concat.dist_tpls.src')),
            grunt.config('meta.banner'), grunt.config('meta.cssFileBanner'));
    });

    grunt.registerTask('makeVersionsMappingFile', function () {
        var done = this.async();

        var exec = require('child_process').exec;

        var versionsMappingFile = 'demo/versions-mapping.json';

        exec('git tag --sort -version:refname', function (error, stdout, stderr) {
            // Let's remove the oldest 14 versions.
            var versions = stdout.split('\n').slice(0, -14);
            var jsContent = versions.map(function (version) {
                version = version.replace(/^v/, '');
                return {
                    version: version,
                    url: `/bootstrap/versioned-docss/${version}`
                };
            });
            jsContent = _.sortBy(jsContent, 'version').reverse();
            jsContent.unshift({
                version: 'Current',
                url: '/bootstrap'
            });
            grunt.file.write(versionsMappingFile, JSON.stringify(jsContent));
            grunt.log.writeln(`File ${versionsMappingFile.cyan} created.`);
            done();
        });

    });

    grunt.registerTask('version', 'Set version. If no arguments, it just takes off suffix', function () {
        util.setVersion(this.args[0], this.args[1]);
    });
    grunt.registerMultiTask('shell', 'run shell commands', function () {
        var self = this;
        var sh = require('shelljs');
        self.data.forEach(function (cmd) {
            cmd = cmd.replace('%version%', grunt.file.readJSON('package.json').version);
            grunt.log.ok(cmd);
            var result = sh.exec(cmd, { silent: true });
            if (result.code !== 0) {
                grunt.fatal(result.output);
            }
        });
    });
    grunt.registerTask('serve', ['connect:server1', 'watch:livereload1']);
    grunt.registerTask('test-serve', ['connect:server2', 'watch:livereload2']);
}