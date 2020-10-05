const fs = require('fs');
const stream = require('stream');
const { pipeline } = require('stream');
const { cypher } = require('./cypher');
const args = require('./args');

class cypherTransform extends stream.Transform {
  _transform(data, encoding, callback) {
    try {
      callback(null, cypher(args.action, data.toString(), args.shift));
    } catch (error) {
      callback(error);
    }
  }
}

stream.pipeline(
  process.stdin,
  new cypherTransform(),
  process.stdout,
  err => {
      if (err) {
          console.error('Failed', err)
      } else {
          console.log('Done')
      }
  }
)
