const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id', function(req,res) {
  notes.splice(req.params.id, 2);
  res.json(notes);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

});

module.exports = router;