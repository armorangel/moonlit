const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({hello: 'world'});
	console.log("home");
	console.log(111);
	console.log(222);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
