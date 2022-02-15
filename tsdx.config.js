const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
      postcss({
        inject: true,
        extract: !!options.writeMeta,
      }),
      ...config.plugins,
    ];
    return config;
  },
};
