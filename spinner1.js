// process.stdout.write('hello from spinner1.js... \rheyyy\n');



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



// Old method
// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   '); 
//   }, 700);
  