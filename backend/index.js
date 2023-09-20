const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const md5 = require('md5');
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
dotenv.config({path:'./config.env'});
require('./DB/conn');

const PORT = process.env.PORT;

const user = require("./routes/user_route")
app.use('/user/',user);


app.listen(PORT, async function (res) {
    console.log(`server started at ${PORT}`);
})
