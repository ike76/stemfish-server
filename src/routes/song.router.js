const express = require("express")
const songController = require("../controllers/song.controller")
const songRouter = express.Router()

songRouter.get("/", songController.rest.getSongs)
songRouter.post("/", songController.rest.createSong)
songRouter.post("/addAdmin", songController.rest.addAdmin)
module.exports = songRouter
