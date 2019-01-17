const User = require("../models/user.model")
const Song = require("../models/song.model")

exports.getUser = userID => {
  return User.findById(userID)
}
exports.getUserSongs = async userID => {
  const { songs } = await User.findById(userID).populate("songs")
  return songs
}

exports.rest = {
  async createUser(req, res) {
    const { firstName, lastName, rating, email } = req.body
    const user = await User.create({ firstName, lastName, rating, email })
    res.status(200).json(user)
  },
  async getUsers(req, res) {
    const users = await User.find()
    res.status(200).json(users)
  },
  async addSongToUser(req, res) {
    const { songId, userId } = req.body
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { songs: songId }
      },
      { new: true }
    )
    res.json(user)
  }
}
