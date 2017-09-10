module.exports = function (grunt, options) {
  return {
    options: {
      sourceMap: true,
      includePaths: [
        '.',
        'themes/<%= config.theme %>/assets/css/'
      ]
    },
    files: {
      '<%= devPath %>/assets/css/layout.css': 'themes/<%= config.theme %>/assets/css/layout.scss'
    }
  }
}
