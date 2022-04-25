const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const profilesRoutes = require('./routes/profiles');

const app = express();
app.use(cors());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/profiles', profilesRoutes);

const ports = process.env.PORT || 3000;

mongoose.connect(
  `mongodb://localhost:27017/${process.env.DATABASE}`, 
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    app.listen(ports);
    console.log(`Its running on port: ${ports}`)
})
.catch((err) => console.log(`I cant connect to the db server`, err));

app.use(bodyParser.json());
