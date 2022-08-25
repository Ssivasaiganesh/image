const express = require('express');
const app = express();
app.set("view engine","ejs")
const bodyparser = require("body-parser")
const fs = require('fs');
app.use(bodyparser.urlencoded({ extended: false}))
var a=JSON.parse(fs.readFileSync("second.json"))
app.get('/', function(req,res){
    res.render('index', {"name": a})
});
app.get('/data/:id',function(req,res){
    const idfor = req.params.id
    res.render('data',{ "id": idfor, "value":a[idfor]})
})
app.listen(1230);