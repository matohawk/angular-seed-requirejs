module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
		    dev: {
		        options: {
		            baseUrl: './js',
		            out: './js/myApp.js',
		            optimize: 'none',
		            mainConfigFile: './js/rMyApp.js',
		            name: 'rMyApp',
		            generateSourceMaps: true,
		            preserveLicenseComments: false,
		            //fileExclusionRegExp: /^(r|build)\.js$/,
		            onBuildWrite: function(moduleName, path, contents) {
		                var modulesToExclude, shouldExcludeModule;

		                modulesToExclude = ['rMyApp'];
		                shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0;
		                if (shouldExcludeModule) {
		                    return '';
		                }
		                return contents;
		            },
		            wrap: false,
		            skipModuleInsertion: true,
		            useStrict: false,
		            logLevel: 0
		        }
		    }
        },
        regarde: {
            js: {
                files: ['js/lib/*.js'],
                tasks: ['requirejs:dev']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-regarde');

    grunt.registerTask('default', ['requirejs:dev']);
    grunt.registerTask('watch', ['regarde:js']);
};
