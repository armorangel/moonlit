const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
	//res.send({hello: 'world'});
	console.log("home");
	console.log(111);
	console.log(222);
	console.log(333);
	console.log(444);
});

app.get('/template', function(req, res){
  res.render('temp', {time:Date(), title:'Jade'});
});

app.get('/dynamic', function(req, res) {
	
  var lis = '';
  for(var i=0; i<5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>`;
  res.send(output);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
