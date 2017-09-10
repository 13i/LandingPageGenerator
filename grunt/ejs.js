module.exports = function (grunt, options) {
  return {
    options: {
      baseUrl: '/'
    },
    cwd: 'themes/<%= config.theme %>/',
    src: ['**/*.ejs', '!partials/**/*'],
    dest: '<%= devPath %>/',
    expand: true,
    ext: '.html'
  }
}
