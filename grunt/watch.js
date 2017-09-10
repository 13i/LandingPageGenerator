module.exports = function (grunt, options) {
  return {
    html: {
      options: { livereload: true },
      files: ['themes/<%= config.theme %>/**/*.ejs'],
      tasks: ['ejs']
    },
    js: {
      options: { livereload: true },
      files: ['themes/<%= config.theme %>/assets/js/**/*.js'],
      tasks: ['concat']
    },
    css: {
      options: { livereload: true },
      files: ['themes/<%= config.theme %>/assets/css/**/*'],
      tasks: ['sass', 'postcss:dev']
    },
    img: {
      options: { livereload: true },
      files: ['themes/<%= config.theme %>/assets/img/**'],
      tasks: ['newer:copy:dev']
    }
  }
}
