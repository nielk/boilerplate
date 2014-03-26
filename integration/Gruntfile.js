module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        poly: grunt.file.readJSON('polypodes.json'),

        src: {
            path: './',
            assets: '<%= src.path %>assets/',
            less: '<%= src.assets %>less/',
            js: '<%= src.assets %>js/',
            jade: '<%= src.path %>jades/',
            vendors: '<%= src.assets %>vendors/',
            fonts: '<%= src.assets %>fonts/',
            images: '<%= src.assets %>images/'
        },

        dist: {
            path: './dist/',
            assets: '<%= dist.path %>assets/',
            css: '<%= dist.assets %>css/',
            js: '<%= dist.assets %>js/',
            vendors: '<%= dist.assets %>vendors/',
            fonts: '<%= dist.assets %>fonts/',
            images: '<%= dist.assets %>images/'
        },

        watch: {
            options: {
                // livereload: true,
            },
            jade: {
                files: ['<%= src.jade %>/**/*.jade'],
                tasks: ['jade']
            },
            less: {
                files: ['<%= src.less %>/**/*.less'],
                tasks: ['less:dist']
            },
            lessdev: {
                files: ['<%= src.less %>/**/*.less'],
                tasks: ['less:build']
            },
            js: {
                files: ['<%= src.js %>/**/*.js'],
                tasks: ['jshint', 'copy:js']
            }
        },

        browser_sync: {
            dev: {
                bsFiles: {
                    src : ['<%= dist.css %>*.css', '<%= dist.path %>*.html']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "<%= dist.path %>"
                    },
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            },
            cms: {
                bsFiles: {
                    src : ['<%= dist.css %>*.css', '<%= dist.path %>*.html']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "<%= poly.cmsPath %>"
                    },
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            }
        },

        copy: {
            fonts: {
                src: '<%= src.fonts %>/**/*.*',
                dest: '<%= dist.path %>/'
            },
            js: {
                src: '<%= src.js %>/**/*.*',
                dest: '<%= dist.path %>/'
            },
            vendors: {
                src: '<%= src.vendors %>/**/*.*',
                dest: '<%= dist.path %>/'
            },
            cms: {
                expand: true,
                cwd: '<%= dist.css %>/',
                src: '*.*',
                dest: '<%= poly.cmsPath %><%= poly.cmsCss %>'
            },
            dev: {
                expand: true,
                cwd: '<%= dist.assets %>/',
                src: ['**/*.*', '!*.html'],
                dest: '<%= poly.cmsPath %>'
            },
            images: {
                expand: true,
                cwd: '<%= src.images %>',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: '<%= dist.images %>'
            },
            svg: {
                expand: true,
                cwd: '<%= src.images %>',
                src: ['**/*.svg'],
                dest: '<%= dist.images %>'
            }
        },

        clean: ['<%= dist.path %>'],

        jade: {
          compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [{
                cwd: '<%= src.jade %>',
                src: '*.jade',
                dest: '<%= dist.path %>',
                expand: true,
                ext: '.html'
            }]
          }
        },

        less: {
            dist: {
                options: {
                },
                files: {
                    "<%= dist.css %>style.css": ["<%= src.less %>style.less"]
                }
            },
            build: {
                options: {
                    compress: true
                },
                files: {
                    "<%= poly.cmsPath %><%= poly.cmsCss %>style.css": ["<%= src.less %>style.less"]
                }
            }
        },

        // recess: {
        //     lint: {
        //         files: {
        //             '<%= dist.css %>style.css': ['<%= src.less %>**/*.less']
        //         }
        //     },
        //     dist: {
        //         options: {
        //             compile: true,
        //             includePath: ['<%= src.less %>modules/']
        //         },
        //         files: {
        //             '<%= dist.css %>style.css': ['<%= src.less %>style.less']
        //         }
        //     },
        //     build: {
        //         options: {
        //             compile: true,
        //             compress: true,
        //             includePath: ['<%= src.less %>modules/']
        //         },
        //         files: {
        //             '<%= dist.css %>style.css': ['<%= src.less %>style.less']
        //         }
        //     }
        // },

        uglify: {
            my_target: {
                files: {
                '<%= dist.js %>main.js': ['<%= src.js %>main.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '<%= src.images %>',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= dist.images %>'
                }]
            }
        },

        bower: {
            dev: {
                dest: '<%= dist.vendors %>'
            }
        },

        jshint: {
            // options: {
            //     curly: true,
            //     eqeqeq: false,
            //     eqnull: false,
            //     browser: false,
            //     globals: {
            //         jQuery: false
            //     },
            // },
            all: ['<%= src.js %>main.js']
        },

        // TODO : uncess, browserSync, test, git, ...

    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', [
        'clean',
        'copy:images',
        'copy:fonts',
        'copy:js',
        'copy:vendors',
        'bower',
        'jade',
        // 'recess:lint',
        'less:dist',
        'jshint',
        'browser_sync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy:fonts',
        'copy:vendors',
        'copy:svg',
        'bower',
        'jade',
        'less:build',
        'uglify',
        'imagemin',
        'copy:dev',
        'watch:lessdev'
    ]);

    grunt.registerTask('cms', [
        'build',
        'copy:cms'
    ]);

};
