const express = require("express")
const app = express()
require("dotenv").config()
const { ApolloServer, gql } = require("apollo-server-express")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
// REST routes
const { userRouter, songRouter } = require("./routes")
app.use("/users", userRouter)
app.use("/songs", songRouter)

// GRAPHQL
const { typeDefs } = require("./schema/typeDefs") // SCHEMA
const resolvers = require("./resolvers/index") // RESOLVERS

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

// start it up
const mongoose = require("mongoose")
const { DB_USER, DB_PASSWORD } = process.env
mongoose
  .connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@ds259144.mlab.com:59144/stemfish`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(4000, () => {
      console.log(`listening on http://localhost:4000${server.graphqlPath}`)
    })
  })
