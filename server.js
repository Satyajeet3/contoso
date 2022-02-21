var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Name : Satyajeet Malpe");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>DevOps</li>"+
                    " <li>DataScience</li>"+
                    " <li>Database</li>"+
                    " <li>Testing</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
