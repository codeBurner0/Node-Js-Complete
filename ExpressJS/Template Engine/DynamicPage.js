const express = require("express");
const app = express();
const user = {
  name: "Ankit Anand",
  email: "ankit@gmail.com",
  city: "Mathura",
};
app.set("view engine", "ejs");

app.get("",(req,res)=>{
    res.render('home')
})

app.get("/about", (req, res) => {
  res.render("about", { user });
});

app.listen(3000, () => [console.log("server is started")]);
