const express = require("express")
const userRouter = express.Router()
const userController = require("../controllers/user.controller")

userRouter.get("/", userController.rest.getUsers)
userRouter.post("/", userController.rest.createUser)
userRouter.post("/addSongToUser", userController.rest.addSongToUser)
module.exports = userRouter
