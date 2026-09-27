var http = require('http');
var fs   = require('fs');
var path = require('path');
var os   = require('os');

var PORT = process.env.PORT || 3000;
var ROOT = __dirname;

var MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.csv':  'text/csv; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
  '.json': 'application/json; charset=utf-8'
};

function getLocalIPs() {
  var ips = [];
  var ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach(function(name) {
    ifaces[name].forEach(function(iface) {
      if (iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
    });
  });
  return ips;
}

var server = http.createServer(function(req, res) {
  var urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  var filePath = path.join(ROOT, urlPath);

  // impede path traversal fora do ROOT
  if (filePath.indexOf(ROOT) !== 0) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, function(err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 — arquivo não encontrado: ' + urlPath);
      return;
    }
    var ext  = path.extname(filePath).toLowerCase();
    var mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', function() {
  var ips = getLocalIPs();
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║         EXAM://PROTOCOL  —  Servidor         ║');
  console.log('╠══════════════════════════════════════════════╣');
  console.log('║  Local:    http://localhost:' + PORT + '             ║');
  ips.forEach(function(ip) {
    var line = '║  Rede:     http://' + ip + ':' + PORT;
    console.log(line + Array(49 - line.length).join(' ') + '║');
  });
  console.log('╠══════════════════════════════════════════════╣');
  console.log('║  Pasta:    ' + ROOT.slice(0, 34) + (ROOT.length > 34 ? '...' : Array(35 - ROOT.length).join(' ')) + '  ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('\n  Pressione Ctrl+C para parar.\n');
});
