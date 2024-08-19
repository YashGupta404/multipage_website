import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs"); // ALWAYS REMEMBER THAT THESE FILE PATHS ARE ALWAYS RELATIVE TO THE CHILDREN OF THE FOLDER WE ARE CURRENTLY AT THUS, INDEX.EJS IS RELATIVE TO VIEWS, IMAGES RELATIVE TO PUBLIC, FOOTER AND HEADER RELATIVE TO VIEWS SO THEIR FILEPATH IS PARTIALS/FOOTER.EJS
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//Remember Static files like css and images should always be in a public folder and not inside views folder where we have kept the ejs files and footer and header will be located in
