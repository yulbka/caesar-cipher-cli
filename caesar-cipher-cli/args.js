const fs = require('fs');

const args = process.argv.slice(2);

let action, shift, input, output;

if (args.includes('-a')) action = args[args.indexOf('-a') + 1];
if (args.includes('--action')) action = args[args.indexOf('--action') + 1];
if (args.includes('-s')) shift = +args[args.indexOf('-s') + 1];
if (args.includes('--shift')) shift = +args[args.indexOf('--shift') + 1];
if (args.includes('-i')) input = args[args.indexOf('-i') + 1];
if (args.includes('--input')) input = args[args.indexOf('--input') + 1];
if (args.includes('-o')) output = args[args.indexOf('-o') + 1];
if (args.includes('--output')) output = args[args.indexOf('--output') + 1];

const validate = () => {
  if (!action) {
    console.error('Required argument not passed: --action');
    process.exit(1);
  }
  if (!shift) {
    console.error('Required argument not passed: --shift');
    process.exit(1);
  }
  if (isNaN(shift) || shift < 0 || !Number.isInteger(shift)) {
    console.error('Shift should be positive integer number');
    process.exit(1);
  }
  if (input) {
    try {
      fs.accessSync(input, fs.constants.F_OK | fs.constants.R_OK)
    } catch (error) {
      console.error(`${input} does not exists or not readable`);
      process.exit(1);
    }
  }
  if (output) {
    try {
      fs.accessSync(output, fs.constants.F_OK | fs.constants.W_OK)
    } catch (error) {
      console.error(`${output} does not exists or not writable`);
      process.exit(1);
    }
  }
}

module.exports = {
  action,
  shift,
  input,
  output,
  validate,
};
