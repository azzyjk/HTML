var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="./create"> create </a>
    ${body}
  </body>
  </html>

<<<<<<< HEAD
  `;
}

function templateList(filelist) {
  var list = `<ul>`;
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + `</ul>`;
  return list;
}
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname == '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        title = 'Welcome';
        description = 'Hello World.';
        var list = templateList(filelist);
        let template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      })
=======
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`./data/${queryData.id}`, 'utf8', function(err, description){
      let template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
      `;

    } else {
      fs.readdir('./data', function (error, filelist) {
        var list = templateList(filelist);
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          title = queryData.id;
          let template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });

    }
  } else if (pathname === '/create') {
    fs.readdir('./data', function (error, filelist) {
      title = 'WEB - create';
      description = 'Hello World.';
      var list = templateList(filelist);
      let template = templateHTML(title, list, `
      <form action="http://localhost:3000/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      `);
      response.writeHead(200);
      response.end(template);
    })
  } else if (pathname == '/create_process') {
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      console.log(post);
    });
    response.writeHead(200);
    response.end('success');
  } else {
    response.writeHead(404);
    response.end('Not found');
  };
});
app.listen(3000);