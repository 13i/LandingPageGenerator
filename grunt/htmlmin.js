module.exports = function (grunt, options) {
  return {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%= devPath %>',
      src: '**/*.html',
      dest: '<%= distPath %>'
    }]
  }
}
