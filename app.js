const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({hello: 'world'});
	console.log("home");
	console.log(111);
	console.log(222);
	console.log(333);
	console.log(444);
	console.log(555);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
