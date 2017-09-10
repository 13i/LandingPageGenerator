module.exports = function (grunt, options) {
  return {
    html: {
      options: { livereload: true },
      files: ['<%= devPath %>/**/*.ejs'],
      tasks: ['ejs:dist']
    },
    js: {
      options: { livereload: true },
      files: ['<%= devPath %>/assets/js/**/*.js'],
      tasks: ['concat:dist']
    },
    css: {
      options: { livereload: true },
      files: ['<%= devPath %>/assets/css/**/*'],
      tasks: ['sass:dist', 'postcss:dev']
    },
    img: {
      options: { livereload: true },
      files: ['<%= devPath %>/assets/img/**'],
      tasks: ['newer:copy:dev']
    }
  }
}
