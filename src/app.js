const express = require("express");
require("./db/conn");
const User = require("./models/usermessage");

const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const staticpath = path.join(__dirname, "../public");
const temppath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use(express.urlencoded({extended:false}));

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.static(staticpath))

app.set("view engine", "hbs");

app.set("views", temppath);

hbs.registerPartials(partialpath);



app.get("/", (req,res)  =>{

    res.render("index");
});

app.get("/about", (req,res)  =>{

    res.render("about");
});

app.get('*', (req, res) => {
    res.render("404", {
        errorcomment: "404 Error"
    });
});

app.get("/services", (req,res)  =>{

    res.render("services");
});

app.get("/contact", (req,res)  =>{

    res.render("contact");
});

app.get("/maps", (req,res)  =>{

    res.render("maps");
});

app.post("/contact", async(req,res) =>{
    try{
        const userDats=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch (error) {
        res.status(500).send(error);
    }


})

app.listen(port, () => {

    console.log(`server is running...${port}`);
})