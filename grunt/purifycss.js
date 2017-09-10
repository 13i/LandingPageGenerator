module.exports = function (grunt, options) {
  return {
    options: {},
    target: {
      src: ['<%= distPath %>/**/*.html', '<%= distPath %>/assets/js/*.js'],
      css: ['<%= tmpPath %>/assets/css/layout.css'],
      dest: '<%= tmpPath %>/assets/css/layout.purified.css'
    }
  }
}
