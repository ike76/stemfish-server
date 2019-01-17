const helloResolver = require("./helloResolver")
const songController = require("../controllers/song.controller")
const userController = require("../controllers/user.controller")
module.exports = {
  Query: {
    allSongs: (root, args, ctx) => {
      return songController.getSongs()
    },
    user: (root, { userID }, ctx) => {
      return userController.getUser(userID)
    }
  },
  Mutation: {
    createSong: (root, args, ctx) => {
      return songController.createSong(args)
    }
  },
  User: {
    songs: ({ _id }, args, ctx) => {
      return userController.getUserSongs(_id)
    }
  },
  Song: {
    admin: ({ admin }, args, ctx) => {
      return userController.getUser(admin)
    }
  }
}
