let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let taskModel = new Schema({

//task: {type:String},
	name: String,
    task:String,
    Date: String,
    description:String,
	progress:String,
	pending:String,
	completed:String,
	default:String,
	
	// task: { type: String },
	// taskStatus: {
	// 	type: String,
	// 	enum: ["progress", "pending", "completed"],
	// 	default: "pending",
	// },

	employee: { type: Schema.Types.ObjectId, ref: "employee" },
})


module.exports = mongoose.model("task1", taskModel);
