const emp = require('../Models/emp');

//create employees:

exports.addEmployee = async (data) => {
	try {
		const employee = new emp(data);
		await employee.save();
	} catch (err) {
		throw err;
	}
};

//findemployees:

exports.findEmployee=async() => {
	try{
		return emp.find();
	}catch(err){
		throw err;
	}
};

//find by id:

exports.findEmployeeById = async (id) => {
	try {
		console.log(id);
		return emp.findById({ _id:id });
	} catch (err) {
		throw err;
	}
};

//delete employee by name:

exports.findEmployeeAndDelete=async(a)=>{
	try{
		return emp.findOneDelete({name:a});
	}catch(err){
		throw err;
	}
};

// update employees:

exports.updateEmployee=async(query,data)=>{
	try {
		return emp.findByIdAndUpdate(query,data,{new:true});
	} catch (err) {
		throw err;
	}
};

