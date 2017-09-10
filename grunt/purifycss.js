module.exports = function (grunt, options) {
  return {
    options: {},
    target: {
      src: ['<%= distPath %>/**/*.html', '<%= distPath %>/assets/js/*.js'],
      css: ['<%= devPath %>/assets/css/layout.css'],
      dest: '<%= devPath %>/assets/css/layout.purified.css'
    }
  }
}
