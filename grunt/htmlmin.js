module.exports = function (grunt, options) {
  return {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: '<%= tmpPath %>',
        src: '**/*.html',
        dest: '<%= distPath %>'
      }]
    }
  }
}
