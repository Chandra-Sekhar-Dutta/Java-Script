const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your first name? ', (firstName) => {
    rl.question('What is your last name? ', (lastName) => {
        console.log(`Hello ${firstName} ${lastName}`);
        rl.close();
    });
});