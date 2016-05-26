var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs) {
    yargs.options({
        name: {
            demand: true,
            alias: 'n',
            description: "Your first name goes here"

        },
        lastname: {
            demand: true,
            alias: "l",
            description: "Your last name goes here"
        }
    }).help('help');
  })
  .help('help')
  .argv;
var command = argv._[0];
console.log(command);
// command.pop();

console.log(argv);
if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
  console.log("hello " + argv.name + " " + argv.lastname + "!");
  
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
  console.log("Hello " + argv.name + "!");

} else if (command === 'hello') {
  console.log("Hello world!");
}
