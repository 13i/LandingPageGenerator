module.exports = function (grunt, options) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= devPath %>/assets/img',
        src: ['**/*.{png,jpg,gif}'],
        dest: '<%= distPath %>/assets/img'
      }]
    }
  }
}
