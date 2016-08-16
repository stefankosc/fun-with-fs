var fs = require('fs');

function readEverything(path) {

    fs.readdir(path, function (err, items) {
        if (!err) {
            items.forEach(function (item) {
                fs.stat(path + '/' + item, function (err, stats) {
                    if (stats.isDirectory()) {
                        readEverything(path + '/' + item);
                        fs.readdir(path + '/' + item, function (err, items) {
                            console.log(path + '/' + item + ' contains ' + items.join(', '));
                        })
                    }
                })
            })
        } else {
            console.log(err);
            process.exit;
        }
    });
}

var a = readEverything(__dirname + '/files');
