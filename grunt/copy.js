module.exports = function (grunt, options) {
  return {
    dev: {
      files: [
        { src: 'fonts/**', dest: '<%= devPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' },
        { src: 'img/**', dest: '<%= devPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' }
      ]
    },
    dist: {
      files: [
        { src: 'fonts/**', dest: '<%= distPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' }
      ]
    }
  }
}
