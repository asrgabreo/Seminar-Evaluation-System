const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const db = require('./config/mongoose');
const morgan = require('morgan');
app.use(morgan("tiny"));
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

require('dotenv').config();
const path = require("path");

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(passport.initialize());
app.use('/', require('./routes'));

app.listen(PORT, function (err) {
  if (err) {
    console.log('error:', err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${PORT}`);
});

app.use('/public', express.static(__dirname + '/public'));
