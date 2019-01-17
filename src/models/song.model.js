const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const songSchema = new mongoose.Schema({
  title: String,
  bpm: Number,
  style: [String],
  admin: { type: ObjectId, ref: "User" }
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song
