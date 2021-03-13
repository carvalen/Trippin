const { Router } = require("express");
const route = Router();
// const { withAuth } = require("../middlewares/withAuth");
const {
  login,
  signup,
  logout,
  getUser,
} = require("../controllers/auth.controllers");

function isLoggedIn(req, res, next) {
  if(req.session.currentUser) next();
  else res.redirect('/login');
}

route
  .post("/signup", signup)
  .post("/login", login)
  .post("/logout", logout)
   .get("/",isLoggedIn, getUser);

module.exports = route;