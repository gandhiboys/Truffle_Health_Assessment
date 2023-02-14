const express = require("express");
const app = express();

app.use(express.json());

//create a middleware
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//initialize bill array
let bills = [];

//endpoints

//get endpoint
app.get("/", (req, res) => {
    // return res.json(bills);
    res.sendFile('C://Personal Info//SDSU//Internship Docs//Truffle Health - Backend//index.html');
});

//get endpoint
app.get("/items/get", (req, res) => {
    return res.json(bills);
});

//post endpoint
app.post("/items",urlencodedParser, (req,res) => {
    console.log(req.body);
    bill = req.body;

    //push new bill to the bill array
    bills.push(bill);
    return res.json(bill);
    // return res.render('C://Personal Info//SDSU//Internship Docs//Truffle Health - Backend//result.html', {bills:bills});
});


var server = app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

module.exports = server;