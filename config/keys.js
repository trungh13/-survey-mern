//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // production - return prod set of keys
  module.exports = require('./prod' );
} else {
  // development - return dev set of keys
  module.exports = require('./dev' );
}
