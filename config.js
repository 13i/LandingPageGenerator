/**
 * Theme :
 * Indicate here the theme you will use
 */
var theme = 'blank'

/**
 * Config :
 * Base configuration is stored in 2 files :
 * - ./defaults.js
 * - ./themes/YOUR_THEME/config.js
 * Have a look at these files to know what is configurable in your page
 */
var config = require('merge-recursive')(
    require('./defaults'),
    { 'theme': theme },
    require('./themes/' + theme + '/config')
)

module.exports = config
