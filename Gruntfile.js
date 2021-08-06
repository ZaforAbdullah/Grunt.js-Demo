module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['build/*']
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/output.min.css': ['src/test1.css', 'src/test2.css']
        }
      }
    },

  });

  // Load the plugin that provides the "grunt-contrib-clean" task
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load the plugin that provides the "grunt-contrib-cssmin" task
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // A very basic task
  // To run this this `grunt basic`
  grunt.registerTask('basic', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  // Default task(s)
  grunt.registerTask('default', ['clean', 'cssmin']);

};