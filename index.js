const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instagram.ejs", { username });});

app.listen(PORT, () => {
    console.log(`Server is running${PORT}`);
});
