var express = require("express");
const app = express();

app.get('/test', (req, resp) => {
    resp.send("Hello World writing after understanding !!");
})

app.listen(8000);