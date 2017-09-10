/* global module:false */

module.exports = function (grunt) {
  // Automatic config loading
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      config: grunt.file.readJSON('config.json'),
      distPath: 'dist',
      devPath: 'dev'
    }
  })

  // Default task.
  grunt.registerTask('default', [
    'clean:dev',
    'ejs',
    'concat:dist',
    'sass:dist',
    'postcss:dev',
    'copy:dev',
    'connect:dev',
    'watch'
  ])

  // Dist task
  grunt.registerTask('dist', [
    'clean:dev',
    'clean:dist',
    'ejs',
    'htmlmin:dist',
    'concat:dist',
    'uglify:dist',
    'sass:dist',
    'purifycss',
    'postcss:dist',
    'copy:dist',
    'imagemin:dist',
    'clean:dev',
    'connect:dist'
  ])
}
