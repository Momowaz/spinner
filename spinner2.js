// updated method
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  console.log(); // Add a newline character at the end
}, delay);
