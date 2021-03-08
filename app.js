const express = require("express");
const app = express();
// middleware configurations
require("./configs/middleware.config")(app);
// mongodb
require("./configs/db.config");
//rutes

app.get("/",(req,res)=> res.send("hellooo"));

app.listen(4000, () => console.log("server running"));

