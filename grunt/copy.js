module.exports = function (grunt, options) {
  return {
    dev: {
      files: [
        { src: 'fonts/**', dest: '<%= tmpPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' },
        { src: 'img/**', dest: '<%= tmpPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' }
      ]
    },
    dist: {
      files: [
        { src: 'fonts/**', dest: '<%= distPath %>/assets/', expand: true, cwd: 'themes/<%= config.theme %>/assets/' }
      ]
    }
  }
}
