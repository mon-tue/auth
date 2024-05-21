const path = require('path');

module.exports = {
  // Your existing webpack configuration properties...

  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },

  // Other webpack configuration properties...

};
