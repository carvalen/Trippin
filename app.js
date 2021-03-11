require("dotenv").config();
const express = require("express");
const bodyParser = require ("body-parser")
const app = express();


// middleware configurations
require("./configs/db.config")(app);
require("./configs/middleware.config")(app);
require("./configs/session.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//routes

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
const listRoutes = require("./routes/list.routes");
app.use("/api/list", listRoutes);
const templateRoutes = require("./routes/template.routes");
app.use("/api/template", templateRoutes);


app.listen(process.env.PORT, () => console.log("Server running on port 4000"));

