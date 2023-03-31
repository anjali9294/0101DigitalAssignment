import Employee from "../Model/Employee.js";

const employees = async (req, res) => {
  const {
    fullName,
    email,
    dateOfBirth,
    dateOfHire,
    position,
    department,
    city,
  } = req.body;
  console.log(req.body.email);

  try {
    let employee = await Employee.findOne({ email });

    if (employee) res.status(400).send({ message: "already registerd" });
    employee = await Employee.create({
      fullName,
      email,
      dateOfBirth,
      dateOfHire,
      position,
      department,
      city,
    });

    res.status(200).send({
      success: true,
      employee,
    });
  } catch (error) {
    console.log(error);
  }
};

const employeesList = async (req, res) => {
  try {
    let employee = await Employee.find();

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    console.log(error);
  }
};

export { employees, employeesList };
