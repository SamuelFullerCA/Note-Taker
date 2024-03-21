const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    // TODO: Logic for sending all the content of db/diagnostics.json
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
  });
  
notes.post('/', (req, res) => {
    // TODO: Logic for appending data to the db/diagnostics.json file
    const {title, text} = req.body
  
    if (req.body) {
      const newNote = {
          title,
          text,
      }
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added`);
    }
  });
  
  module.exports = notes;
  