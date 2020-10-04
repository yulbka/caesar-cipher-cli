const fs = require('fs');
const stream = require('stream');
const { pipeline } = require('stream');
const { cypher } = require('./cypher');

const args = process.argv.slice(2);
const actionIndex = args.indexOf('-a') + 1;
const shiftIndex = args.indexOf('-s') + 1;
const action = args[actionIndex] === '-a' || '-action' ? 'encode' : 'decode';

class cypherTransform extends stream.Transform {
  _transform(data, encoding, callback) {
    try {
      callback(null, cypher(action, data.toString(), args[shiftIndex]));
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
