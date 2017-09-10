module.exports = function (grunt, options) {
  return {
    dev: {
      options: {
        port: 9000,
        hostname: '*',
        base: '<%= tmpPath %>',
        livereload: true,
        open: true
      }
    },
    dist: {
      options: {
        port: 9000,
        hostname: '*',
        base: '<%= distPath %>',
        open: true,
        keepalive: true
      }
    }
  }
}
