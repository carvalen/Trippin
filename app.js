require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./configs/db.config")();
require("./configs/session.config")(app);
require("./configs/middleware.config")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
const listRoutes = require("./routes/list.routes");
app.use("/api/list", listRoutes);
const templateRoutes = require("./routes/template.routes");
app.use("/api/template", templateRoutes);

app.listen(process.env.PORT, () => console.log("Server running on port 4000"));
