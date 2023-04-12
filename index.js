const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/consult",function(req,res){
    res.sendFile(__dirname+"/consult.html")
})
app.get("/dashboard",function(req,res){
    res.sendFile(__dirname+"/dashboard.html")
})
app.get("/calandar",function(req,res){
    res.sendFile(__dirname+"/calender.html")
})
app.get("/signin",function(req,res){
    res.sendFile(__dirname+"/signin.html")
})
app.post("/signin",function(req,res){
    res.redirect("/doctors");
})
app.get("/signup.html",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
app.get("/to-do-list",function(req,res){
    res.sendFile(__dirname+"/to-do-list.html")
})
app.get("/index",function(req,res){
    res.redirect("/");
})
app.get("/doctors",function(req,res){
    res.sendFile(__dirname+"/doctors.html");
})
app.listen(3000,function(){
    console.log("server is running at port 3000");
})