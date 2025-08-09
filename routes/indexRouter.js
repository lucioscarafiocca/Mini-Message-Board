const { resolveInclude } = require("ejs")
const { Router } = require("express")
const express = require("express")
const indexRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.get("/new", (req, res) => {
  res.render("form")
})

indexRouter.get("/message/:id", (req, res) => {
  const { id } = req.params
  res.render("message", {
    title: "Your message",
    message: messages[Number(id)],
  })
})

indexRouter.post("/new", (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  })
  res.redirect("/")
})

module.exports = indexRouter
