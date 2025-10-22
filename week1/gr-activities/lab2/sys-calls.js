const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

const fs1 = require('fs');
fs1.writeFile('output.txt', 'This is some sample data.', (err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log('Data written to output.txt');
}
});

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());


const osInfo = `Hostname: ${os.hostname()}\n` + `Platform: ${os.platform()}\n` + `Architecture: ${os.arch()}\n`;

const fs2 = require('fs');
fs2.writeFile('systeminfo.txt', osInfo , (err) => {
    if (err) {
console.error('Error writing file:', err);
} else {
console.log('Data written to systeminfo.txt');
}
});

