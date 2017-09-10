module.exports = function (grunt, options) {
  return {
    options: {
      baseUrl: '/'
    },
    ejs: {
      cwd: 'themes/<%= config.theme %>/',
      src: ['**/*.ejs', '!partials/**/*'],
      dest: '<%= devPath %>/',
      expand: true,
      ext: '.html',
      options: {
        config: grunt.config
      }
    }
  }
}
