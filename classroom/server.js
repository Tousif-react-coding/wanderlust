const express = require("express");
const app = express();
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path");

app.set("view engine", "ejs");

// Set the directory where the template files are located
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: "mysecretstring",
    resave: false,
    saveUninitialized: true,
}));
app.use(flash())


app.get("/",(req,res)=>{
    res.send("This is root page")
});

app.get("/register", (req,res)=>{
    let {name = "unknown"} = req.query;
    req.session.name  = name;
    req.flash("success", "user register successfully")
    res.redirect('/hello' )
})
app.get("/hello", (req,res)=>{
    
    //console.log(req.flash("success"))
    res.render("page.ejs",{name:req.session.name, msg:req.flash("success")})
})
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//       req.session.count++;  
//     }else
//     req.session.count = 1
//     res.send(`your sent req ${req.session.count} times`)
// })

app.listen(3000,()=>{
    console.log("server is listen on 3000")
})