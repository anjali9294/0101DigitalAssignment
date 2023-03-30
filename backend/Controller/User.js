import User from "../Model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) res.status(400).send({ message: "user not found" });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) res.send({ success: false, message: "Incorrect Password" });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");
    res.status(200).send({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log("login", error);
  }
};

const register = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  console.log(req.body.name);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    let user = await User.findOne({ email });

    if (user) res.status(400).send({ message: "user already exist" });
    user = await User.create({
      name,
      email,
      isAdmin,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

    res.status(201).send({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

export { login, register };
