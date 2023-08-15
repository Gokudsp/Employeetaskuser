let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let empSchema = new Schema({   
  
    name: String,
    task:String,
    Date: String,
    description:String,

  })
  
  module.exports = mongoose.model("emp", empSchema)









 //employeeemp: [{ type: Schema.Types.ObjectId, ref: "employeed" }]

  // let employeeModel = new Schema({
// 	name: { type: String },
// 	dateOfBirth: { type: Date },
// 	mailId: { type: String, unique: true },
// 	address: { type: String },
// 	mobileNumber: { type: Number },
// });

// module.exports = mongoose.model("employee1", employeeModel);
