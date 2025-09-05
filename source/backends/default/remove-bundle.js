const fs = require("fs");
const path = require("path");
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
console.log("bundle files: ", fs.readdirSync(path.join(__dirname, "./bundled")));
rl.question("delete bundle? y/n: ", function(answer) {
    if (answer === "n") {
        console.log("aborted deletion ");
    } else {
        console.log("deleting bundle");
        fs.rmdirSync(path.join(__dirname, "./bundled"), {force: true, recursive: true});
        fs.mkdirSync(path.join(__dirname, "./bundled"));
    }
    process.exit(0);
})