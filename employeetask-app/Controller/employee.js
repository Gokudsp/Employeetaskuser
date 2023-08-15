let employeeconnect = require("../Repository/employees");


//create employees:

exports.create = async (req, res) => {
	try {
		await employeeconnect.addEmployee(req.body);
		res.status(200).send("data added Successfully");
	} catch (err) {
		res.status(400).send(err);
	}
}

//find all employees
exports.find = async (req, res) => {
	try {
		let employee = employeeconnect.findEmployee();
		return res.status(400).send(await employee);
	}
	catch (err) {
		res.send(400).send(err);
	}
};

//find by id:

exports.findById = async (req, res) => {
	try {
		let id=req.params.empid;
		console.log(id);
		let employee = employeeconnect.findEmployeeById(id);
		return res.status(200).send(await employee);
	} catch (err) {
		res.status(400).send(err);
	}
};

//delete employee by name:

exports.deleteByName = async (req, res) => {
	try {
		employeeconnect.findEmployeeAndDelete(req.params.name);
		return res.status(200).send("Deleted Successfully");
	} catch (err) {
		res.status(400).send(err);
	}
};

//update employees:

exports.update = async (req, res) => {
	try {
		const id = req.params.id;
		employeeconnect.updateEmployee({ _id: id }, req.body);
		return res.status(200).send("Updated Successfully");
	} catch (err) {
		res.status(400).send(err);
	}
};

