let mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.DBURL) 

const database =mongoose.connection
database.on('connected',() => console.log('Database Connected'))


let express = require("express");
let app = express();

app.listen(3000, () => {
	console.log("Server running.....");
});

let bodyParser = require("body-parser");
app.use(bodyParser.json());

const employee = require ("./Controller/employee");

const task = require ("./controller/task");

//Employee API:


app.post('/emp', employee.create);
app.get("/employee", employee.find);
app.get('/employee/:empid', employee.findById);
app.delete('/employee/:name', employee.deleteByName);
app.put('/employee/:empid', employee.update);


// Employee task API :

app.post("/task", task.create);
app.get("/task/:id", task.findByTask);
app.get("/task/:Date", task.findTaskByDate);
app.get("/task", task.findByTask);
app.put("/task/:id", task.update);
app.delete("/task/:id", task.delete);

