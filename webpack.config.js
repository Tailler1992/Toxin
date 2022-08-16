const baseConfig = require('./webpack/base.config');
const pluginsConfig = require('./webpack/plugins.config');

module.exports = {
  ...baseConfig,
  ...pluginsConfig
};
