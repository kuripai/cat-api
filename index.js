const express = require("express");
const app = express();

app.get("/resource", (req, res) => {
	res.status(200).send("public resource, you can see this");
	});

app.get("/resource/secret", (req, res) => {
	res.status(200).send("shhhhhhhhhhh");
	});

app.get("*", (req, res) => {
	res.sendStatus(404);
	});


		app.listen(9999, () => {
			console.log("start up");
		})