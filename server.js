const express = require("express");
const portfolio = express();


portfolio.listen(2000, () => {

    console.log("Server started and listening on port 2000");
});

portfolio.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});
portfolio.get("/index.html", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});
portfolio.get("/about.html", (req, res) => {

    res.sendFile(__dirname + "/about.html");
});
portfolio.get("/contact.html", (req, res) => {

    res.sendFile(__dirname + "/contact.html");
});