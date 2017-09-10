module.exports = function (grunt, options) {
  return {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    htmlmin: {
      files: [{
        expand: true,
        cwd: '<%= devPath %>',
        src: '**/*.html',
        dest: '<%= distPath %>'
      }]
    }
  }
}
