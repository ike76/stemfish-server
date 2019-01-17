const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

//

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  rating: Number,
  email: String,
  songs: [{ type: ObjectId, ref: "Song" }]
})

const User = mongoose.model("User", userSchema)

module.exports = User
