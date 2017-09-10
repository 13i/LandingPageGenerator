module.exports = function (grunt, options) {
  return {
    options: {
      sourceMap: true,
      includePaths: [
        '.',
        'themes/<%= config.theme %>/assets/css/'
      ]
    },
    sass: {
      files: {
        '<%= devPath %>/assets/css/layout-sass.css': 'themes/<%= config.theme %>/assets/css/layout.scss'
      }
    }
  }
}
