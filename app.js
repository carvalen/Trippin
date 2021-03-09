require("dotenv").config();
const express = require("express");
const app = express();

// middleware configurations
require("./configs/db.config")(app);
require("./configs/middleware.config")(app);
require("./configs/session.config");

//routes

const authRoutes = require("./routes/auth.routes");
app.use("/auth/", authRoutes);
const listRoutes = require("./routes/list.routes");
app.use("/api/list", listRoutes);
const templateRoutes = require("./routes/template.routes");
app.use("/api/template", templateRoutes);


app.listen(process.env.PORT, () => console.log("server running"));

