/* global module:false */

module.exports = function (grunt) {
  // Automatic config loading
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      config: require('./config'),
      distPath: 'dist',
      devPath: 'dev'
    }
  })

  // Default task.
  grunt.registerTask('default', [
    'clean:dev',
    'ejs',
    'concat',
    'sass',
    'postcss:dev',
    'copy:dev',
    'connect:dev',
    'watch'
  ])

  // Dist task
  grunt.registerTask('dist', [
    'clean',
    'ejs',
    'htmlmin',
    'concat',
    'uglify',
    'sass',
    'purifycss',
    'postcss:dist',
    'copy:dist',
    'imagemin',
    'clean:dev',
    'connect:dist'
  ])
}
