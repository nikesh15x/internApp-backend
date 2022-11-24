const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//testing route

app.get("/", (req, res) => {
    res.send(`app working ` + new Date().toLocaleTimeString());
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;


