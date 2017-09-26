
/**
 * Base configuration is stored in 2 files :
 * - ./defaults.js
 * - ./themes/YOUR_THEME/config.js
 */
var config = require('merge-recursive')(
    require('./defaults'),
    require('./themes/blank/config')
)

module.exports = config
