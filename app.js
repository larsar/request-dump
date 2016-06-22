var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));

//app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Headers:\n');
  res.write(JSON.stringify(req.headers));
  res.write('\n\nBody:\n');
  res.end(JSON.stringify(req.body, null, 2))
});

app.post('/', function (request, response) {
  console.log(request.headers);
  console.log(request.body);
  response.send('Hello World!');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

