var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './public',            // required, the root of the server file tree
  port: 8123,               // required, the port to listen
  name: 'LinSvr',   // optional, will set "X-Powered-by" HTTP header
//   host: '10.0.0.100',       // optional, defaults to any interface
  cors: '*',                // optional, defaults to undefined
//   followSymlink: true,      // optional, defaults to a 404 error
//   templates: {
//     index: 'foo.html',      // optional, defaults to 'index.html'
//     notFound: '404.html'    // optional, defaults to undefined
//   }
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});
 
// server.on('request', function (req, res) {
  // req.path is the URL resource (file name) from server.rootPath
  // req.elapsedTime returns a string of the request's elapsed time
// });