import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: false,
});
const User = mongoose.model("User", userSchema, "users");
export default User;
