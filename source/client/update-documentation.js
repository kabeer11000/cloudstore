const archiver = require('archiver');
const fs = require("fs");

/**
 * @param {String} sourceDir: /some/folder/to/compress
 * @param {String} outPath: /path/to/created.zip
 * @returns {Promise}
 */
function zipDirectory(sourceDir, outPath) {
    const archive = archiver('zip', {zlib: {level: 9}});
    const stream = fs.createWriteStream(outPath);

    return new Promise((resolve, reject) => {
        archive
            .directory(sourceDir, false)
            .on('error', err => reject(err))
            .pipe(stream)
        ;

        stream.on('close', () => resolve());
        archive.finalize();
    });
}

const FormData = require("form-data")
const path = require("path");
const fetch = require("node-fetch");
const deploymentId = Math.random();
zipDirectory(path.join(__dirname, "./documentation"), "./documentation/archive.zip").then(async () => {
    if (!fs.existsSync(path.join(__dirname, "./kabeercloud.key.txt"))) return console.error("Kabeer Cloud Key doesn't exist, add a kabeercloud.key.txt file containing your documentation token")
    const key = fs.readFileSync(path.join(__dirname, "./kabeercloud.key.txt")).toString();
    console.log("using key: ", key);
    console.log("Zipping bundle file");
    const formData = new FormData();
    formData.append('bundle', fs.createReadStream('./documentation/archive.zip'));
    fetch('http://cloudstore-web-docs.kabeersapps.rf.gd/_.php?key=' + key, {
        method: 'POST',
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
            Cookie: '__test=e2bed8459a7b641da70df3ffe13080a4',
            DNT: '1',
            Pragma: 'no-cache',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
        body: formData // Here, stringContent or bufferContent would also work
    }).then(res => res.text()).then((res) => {
        console.log("raw response: ", JSON.parse(res));
        console.log(JSON.parse(res).upload === "complete" ? "Deployed to http://cloudstore-web-docs.kabeersapps.rf.gd" : "Deployment Error, check raw response and deployment keys for more info");
        fs.writeFileSync(path.join(__dirname, "./kabeercloud-deployment.debug.log"), `Deployed bundle:${deploymentId} to http://cloudstore-web-docs.kabeersapps.rf.gd at ${new Date().toString()}`);
    });
})