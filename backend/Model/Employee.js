import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  dateOfBirth: String,
  dateOfHire: String,
  position: String,
  department: String,
  city: String,
});
const Employee = mongoose.model("Employee", employeeSchema, "employees");
export default Employee;
