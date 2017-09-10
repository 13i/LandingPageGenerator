module.exports = function (grunt, options) {
  return {
    options: {
      separator: ';',
      sourceMap: true
    },
    files: {
      '<%= devPath %>/assets/js/head.js': ['themes/<%= config.theme %>/assets/js/head.js'],
      '<%= devPath %>/assets/js/layout.js': ['themes/<%= config.theme %>/assets/js/layout.js']
    }
  }
}
