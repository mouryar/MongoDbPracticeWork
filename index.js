var mongodb = require('mongodb');
var movies = require('./movies');
var beautify = require('js-beautify').js_beautify,
fs = require('fs');
 
fs.readFile('interface.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    fs.writeFile('interface.js',beautify(data, { indent_size: 2 }),'utf8')
    //console.log(beautify(data, { indent_size: 2 }));
});