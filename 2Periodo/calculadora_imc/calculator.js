//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/imc.html")
});

app.post("/", function(req, res)
{
    var kg = Number(req.body.kg);
    var mt = Number(req.body.mt);

    var result = kg / Math.pow(mt,2)*10000;

    res.send("Seu IMC é " + Math.round(result*100)/100);
});

app.listen(3000, function(){
    console.log("Server rodando porta 3000");
});