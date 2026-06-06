const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    let instaData = require("./data.json");
    let data = instaData[username];
    if (data){
    res.render("instagram.ejs", { data });}
    else{
        res.render("error.ejs", { username });
    }}
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
