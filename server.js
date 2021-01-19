//Dependencies
//=========================================================================
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./develop/routes/apiRoutes');
const htmlRoutes = require('./develop/routes/htmlRoutes');


//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
  
//Listener
//======================================================
app.listen(process.env.PORT, () => {
console.log(`API server now on port ${PORT}!`);
});