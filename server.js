//Dependencies
//=========================================================================
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();


//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('develop/public'));

//Routes
// ====================================================================
// GET
//launch page
app.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname, 'develop/public/index.html'))
  });
  
  // ` returns note-taking app page
  app.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
  })
  
  //
  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });
  
   app.get('/api/notes/:note', (req, res) => {
    const chosen = req.params.note;
  
    console.log(chosen);
  
    for (let i = 0; i < notes.length; i++) {
      if (chosen === notes[i].id) {
        return res.json(notes[i]);
      }
    }
  
    return res.json(false);
  });
  
  //POST
  app.post('/api/notes', (req,res) => {
    const newNote = req.body;
  
    notes.push(newNote);
    res.json(newNote);
  });
  
  //Listener
  //======================================================
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });