var fs = require('fs');
var obj = {};

function readSynchronously(path, objNode) {

    var list = fs.readdirSync(path);
    list.forEach(function(item) {
        var stat = fs.statSync(path + '/' + item);
        if (stat.isFile()) {
            objNode[item] = stat.size;
        }
        if (stat.isDirectory()) {
            objNode[item] = {
            };
            readSynchronously(path + '/' + item, objNode[item]);
        }
    })
}


readSynchronously(__dirname + '/files', obj);
console.log(obj);

file = JSON.stringify(obj);
fs.writeFile('files.json', file);
