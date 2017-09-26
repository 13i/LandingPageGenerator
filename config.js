
var merge = require('merge-recursive')

/**
 * Theme :
 * Indicate here the theme you will use
 */
var theme = 'bower'

/**
 * Config :
 * Base configuration is stored in 2 files :
 * - ./defaults.js
 * - ./themes/YOUR_THEME/config.js
 * Have a look at these files to know what is configurable in your page
 */
var config = merge(
    require('./defaults'),
    require('./themes/' + theme + '/config')
)

module.exports = config
