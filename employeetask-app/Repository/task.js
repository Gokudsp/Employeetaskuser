const task1 = require("../Models/task");

//create task with employee:

exports.addTask = async (data) => {
	try {
		let task = new task1(data);
		await task.save();
	} 
	catch (err) {
		throw err;
	}
};

//find employee with task:

exports.findTask=async(id)=>{
	try{
		console.log(id);
		return task1.findById({ _id: id });		 
	}
	catch(err){
		throw err;
	}
};

//find employee based on date:

exports.findTaskByDate=async(Date)=>{
	try{
		console.log(Date);

		return task1.find({ Date: Date });
	}
	catch(err){
		throw err;
	}
};

//List the Tasks Employees:

exports.findAllTask=async()=>{
	try{
		return task1.find();
	}
	catch(err){
		throw err;
	}
};

//update API to Update the Task:

exports.updateTask = async (query,data) => {
	try {
		return task1.findOneAndUpdate(query,data,{new:true});
	} catch (err) {
		throw err;
	}
};

//delete task:

exports.deleteTask = async (id) => {
	try {
		return task1.findByIdAndDelete({ _id: id });
	} catch (err) {
		throw err;
	}
};