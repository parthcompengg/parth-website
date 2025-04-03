const { spawn } = require('child_process');
// argv[0] = node
// argv[1] = macos-run-invoker.js
const shell = process.argv[2];
const args = process.argv.slice(3);
console.log(`::debug::macos-run-invoker: ${shell}`);
console.log(`::debug::macos-run-invoker: ${JSON.stringify(args)}`);
const launch = spawn(shell, args, { stdio: 'inherit' });
launch.on('exit', (code) => {
  if (code !== 0) {
    process.exit(code);
  }
});
