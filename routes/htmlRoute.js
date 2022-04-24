// const fs = require("fs");
const path = require("path");
// const express = require('express');
// const app = express();
const router = require('express').Router();

api.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  })






  module.exports = router;