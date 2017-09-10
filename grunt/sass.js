module.exports = function (grunt, options) {
  return {
    options: {
      sourceMap: true,
      includePaths: [
        '.',
        '<%= devPath %>/assets/css/'
      ]
    },
    dist: {
      files: {
        '<%= tmpPath %>/assets/css/layout.css': '<%= devPath %>/assets/css/layout.scss'
      }
    }
  }
}
