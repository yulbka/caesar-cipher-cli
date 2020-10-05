const args = process.argv.slice(2);

let action, shift, input, output;

if (args.includes('-a')) action = args[args.indexOf('-a') + 1];
if (args.includes('-action')) action = args[args.indexOf('-action') + 1];
if (args.includes('-s')) shift = args[args.indexOf('-s') + 1];
if (args.includes('-shift')) shift = args[args.indexOf('-shift') + 1];
if (args.includes('-i')) input = args[args.indexOf('-i') + 1];
if (args.includes('-input')) input = args[args.indexOf('-input') + 1];
if (args.includes('-o')) output = args[args.indexOf('-o') + 1];
if (args.includes('-output')) output = args[args.indexOf('-output') + 1];

module.exports = {
  action,
  shift,
  input,
  output,
}
