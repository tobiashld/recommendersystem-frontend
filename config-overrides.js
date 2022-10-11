const { override, addWebpackPlugin } = require('customize-cra');
const { InjectManifest } = require('workbox-webpack-plugin');
module.exports = (webpack, ...args) => {
  // remove GenerateSW plugin
  webpack.plugins.pop();
  const overridenConf = override(
    addWebpackPlugin(
      new InjectManifest({
        swSrc: './src/offline-service-worker.js',
        swDest: './service-worker.js',
      }),
    ),
)(webpack, ...args);
  return overridenConf;
};