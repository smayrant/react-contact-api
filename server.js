const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("app connected");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
