let TaskRepository = require("../Repository/task");

//create task with employee:

exports.create = async (req, res) => {
	try {
		await TaskRepository.addTask(req.body);
		res.status(201).send("Added Succesfully");
	} catch (err) {
		res.status(500).send(err);
	}
};

//find employee with task:

exports.findByTask = async (req, res) => {
	try {
		let id =req.params.id;
		console.log(id);
		let task = TaskRepository.findTask(id);
		return res.status(200).send(await task);
	} catch (err) {
		res.status(200).send(err);
	}
};

//find employee based on date:

exports.findTaskByDate = async (req, res) => {
	try {console.log(Date);
		let task = TaskRepository.findTaskByDate(req.params.Date);
		return res.status(200).send(await task);
	} catch (err) {
		res.status(200).send(err);
	}
};

//List the Tasks Employees:

exports.findByTask = async (req, res) => {
	try {
		let task = TaskRepository.findAllTask();
		return res.status(200).send(await task);
	} catch (err) {
		res.status(200).send(err);
	}
};

//update API to Update the Task:

exports.update = async (req, res) => {
	try {
		const id = req.params.id;
		let task = TaskRepository.updateTask({ _id: id }, req.body);
		return res.status(200).send(await task);
	} catch (err) {
		res.status(200).send(err);
	}
};

//delete task:

exports.delete = async (req, res) => {
	try {
		let task = TaskRepository.deleteTask(req.params.id);
		return res.status(200).send(await task);
	} catch (err) {
		res.status(200).send(err);
	}
};
