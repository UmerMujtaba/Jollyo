const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// First merge the default Metro config with your custom config
const defaultConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Now wrap it with the Reanimated Metro config
module.exports = wrapWithReanimatedMetroConfig(defaultConfig);
