const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hasMissingCredentials = !username || !password || !email;

    if (hasMissingCredentials) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    req.session.userId = newUser._id;

    return res.status(200).json({ user: newUser.email, id: newUser._id });
  } catch (e) {
    return res.status(400).json({ message: "Wrong request", error: e });
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const hasMissingCredentials = !password || !email;
    if (hasMissingCredentials) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const hasCorrectPassword = await bcrypt.compare(password, user.password);

    if (!hasCorrectPassword) {
      return res.status(401).json({ message: "Unauthorize" });
    }

    req.session.userId = user._id;

    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "Wrong request" });
  }
};

exports.logout = async (req, res) => {
  await req.session.destroy();
  res.status(200).json({ message: "logout" });
};

exports.getUser = async (req, res) => {
  const { userId } = req.session;
  const { email, _id } = await User.findOne(userId);
  res.status(200).json({ id: _id, email });
};
