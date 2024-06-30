if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressErr = require("./utils/ExpressErr.js");
const session = require("express-session")
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

//MongoDb Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the directory where the template files are located
app.set("views", path.join(__dirname, "views"));

// Middleware to parse URL-encoded data from the request body (typically from forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (like CSS, JavaScript, images) from the 'public' directory
app.use(express.static(path.join(__dirname, "/public")));

// Middleware to override HTTP methods (useful for supporting PUT and DELETE requests via forms)
app.use(methodOverride("_method"));

// Use EJS Mate as the template engine for EJS files (allows for layouts, partials, etc.)
app.engine('ejs', ejsMate);

//Exp-session
const sessionOption = {
  secret:"mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 *60 *1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.get("/", (req, res) => {
  res.send("Hi, I am root");
});


app.use(session(sessionOption));
app.use(flash());
//Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next()
})


// app.get("/userdemo" ,async(req,res)=>{
// let demoUser =  new User({
//   email:"student@gmail",
//   username:"Delta-student"
// });
// let registeredUser = await User.register(demoUser,"hello")
// res.send(registeredUser)
// })
//routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


//Custome Error
app.all("*",(req,res,next)=>{
  next(new ExpressErr(404,"404 Page Not Found!"))
})
//Middleware
app.use((err,req,res ,next )=>{
  let {status = 500,message="Something Went wrong!"}= err;
  
//res.status(status).send(message)
res.render("error.ejs",{err})
});

//App listen
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
