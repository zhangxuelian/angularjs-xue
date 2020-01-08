module.exports = function(grunt){
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        ngversion: '1.2.21',
        pkg: grunt.file.readJSON('package.json'),
        dist: 'dist',
        filename: 'angularjs-xue',
        banner: [
            '/**',
            ' * <%= pkg.name %>',
            ' * <%= pkg.homepage %>\n',
            ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
            ' * License: <%= pkg.license %>',
            ' */'
        ].join('\n'),
        
    });
    grunt.registerTask('default', []);
}