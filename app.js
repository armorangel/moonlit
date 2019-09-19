const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

/*Main Page*/
app.get('/', (req, res) => {
	res.render('index');
	//res.send({hello: 'world'});
	console.log("home");
});

/*Login Page*/
app.get('/login', (req, res) => {
	res.render('login');
	console.log('login');
});

/*Notice Page*/
/*Bulletin Page*/
app.get('/bbs', function(req, res) {
	
	/*
	var data = [{a:'aa1', b:'bb11'}
			  ,{a:'aa2', b:'bb2'}
			  ,{a:'aa3', b:'bb3'}
			  ,{a:'aa4', b:'bb4'}
			  ,{a:'aa5', b:'bb5'}
			  ,{a:'aa6', b:'bb6'}];
	*/

	//var data = {result: 'data!'};
	
	var data = {result: [
		{a:'a1', b:'b1'}
		,{a:'a2', b:'b2'}
		,{a:'a3', b:'b3'}
		,{a:'a4', b:'b4'}
		,{a:'a5', b:'b5'}
	]};
	
	console.log(data);
	
	console.log('Bulletin Page');
	res.render('content', data, function(err, html) {
		res.render('index', Object.assign(data, {contents:html}));
	});
});


app.get('/temp', function(req, res) {
	
	/*
	var data = [{a:'aa1', b:'bb11'}
			  ,{a:'aa2', b:'bb2'}
			  ,{a:'aa3', b:'bb3'}
			  ,{a:'aa4', b:'bb4'}
			  ,{a:'aa5', b:'bb5'}
			  ,{a:'aa6', b:'bb6'}];
	*/

	//var data = {result: 'data!'};
	
	var data = {result: [
		{a:'a1', b:'b1'}
		,{a:'a2', b:'b2'}
		,{a:'a3', b:'b3'}
		,{a:'a4', b:'b4'}
		,{a:'a5', b:'b5'}
	]};
	
	console.log(data);
	
	console.log('Temp Page');
	res.render('temp', data, function(err, html) {
		res.render('index', Object.assign(data, {contents:html}));
	});
});



/*Schedule*/



//////////////////////////////////////////////

app.get('/template', function(req, res) {
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
