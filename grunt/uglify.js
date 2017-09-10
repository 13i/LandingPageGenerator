module.exports = function (grunt, options) {
  return {
    uglify: {
      files: {
        '<%= distPath %>/assets/js/head.js': '<%= devPath %>/assets/js/head.js',
        '<%= distPath %>/assets/js/layout.js': '<%= devPath %>/assets/js/layout.js'
      }
    }
  }
}
