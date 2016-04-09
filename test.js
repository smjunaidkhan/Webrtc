
var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('./index.html', function (err, html) {
    
	if (err) {
        throw err; 
    }       
	
    res.end('Hello World\n'+html);
	
});
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

