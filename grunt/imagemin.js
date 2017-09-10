module.exports = function (grunt, options) {
  return {
    files: [{
      expand: true,
      cwd: 'themes/<%= config.theme %>/assets/img',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= distPath %>/assets/img'
    }]
  }
}
