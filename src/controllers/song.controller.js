const Song = require("../models/song.model")
const User = require("../models/user.model")

exports.createSong = args => {
  const song = new Song(args)
  return song.save()
}

exports.getSongs = () => {
  return Song.find({})
}

exports.rest = {
  async createSong(req, res) {
    console.log(" create song called")
    const { title, bpm } = req.body
    const song = await Song({ title, bpm })
    res.json(song)
  },
  async getSongs(req, res) {
    const songs = await Song.find()
    console.log("songs", songs)
    res.status(200).json(songs)
  },
  async addAdmin(req, res) {
    const { songID, adminID } = req.body
    console.log(`adding admin ${adminID} to song ${songID}`)
    const updatedSong = await Song.findByIdAndUpdate(
      songID,
      { admin: adminID },
      { new: true }
    )
    res.json(updatedSong)
  }
}
