const stream = require('stream');
const fs = require('fs');
const path = require('path');
const { cypher } = require('./cypher');
const args = require('./args');

args.validate();

class CypherTransform extends stream.Transform {
  _transform(data, encoding, callback) {
    try {
      callback(null, cypher(args.action, data.toString(), args.shift));
    } catch (error) {
      callback(error);
    }
  }
}

const read = args.input ? fs.createReadStream(path.resolve(__dirname, args.input)) : process.stdin;
const write = args.output ? fs.createWriteStream(path.resolve(__dirname, args.output), { flags: 'a' }) : process.stdout;
const transform = new CypherTransform();

stream.pipeline(
  read,
  transform,
  write,
  err => {
      if (err) {
          console.error('Failed', err)
      } else {
          console.log('Done')
      }
  }
)
