// metro.config.js
const { getDefaultConfig } = require("@react-native/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  buffer: require.resolve("buffer/"),
};

module.exports = config;
