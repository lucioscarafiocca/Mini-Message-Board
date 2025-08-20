const { resolveInclude } = require("ejs")
const { Router } = require("express")
const express = require("express")
const indexRouter = Router()
const db = require("../db/queries")

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllUsernames()
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.get("/new", (req, res) => {
  res.render("form")
})

indexRouter.get("/message/:id", async (req, res) => {
  const { id } = req.params
  const user = await db.getUsername(id)
  console.log(user)
  res.render("message", {
    title: "Your message",
    message: user[0],
  })
})

indexRouter.post("/new", async (req, res) => {
  const user = req.body.name
  const name = req.body.message
  await db.addMessage(user, name)
  res.redirect("/")
})

module.exports = indexRouter
