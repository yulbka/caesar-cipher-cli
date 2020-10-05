const stream = require('stream');
const fs = require('fs');
const path = require('path');
const { cypher } = require('./cypher');
const args = require('./args');

args.validate();

const pathToRead = args.input && path.resolve(__dirname, args.input);
const pathToWrite = args.input && path.resolve(__dirname, args.output);

class CypherTransform extends stream.Transform {
  _transform(data, encoding, callback) {
    try {
      callback(null, cypher(args.action, data.toString(), args.shift));
    } catch (error) {
      callback(error);
    }
  }
}

const read = args.input ? fs.createReadStream(pathToRead) : process.stdin;
const write = args.validate() && args.output ? fs.createWriteStream(pathToWrite, { flags: 'a' }) : process.stdout;
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
