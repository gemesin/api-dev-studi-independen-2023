const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Kurnia Setyo Hermawan
const wawanController = require('./controllers/wawanController');
app.use('/wawan', wawanController);

// ABDUL SOMAN POHAN
const somanController = require('./controllers/somanController');
app.use('/soman', somanController);

// Azki Alfarisi Nurhabibi
const habibiController = require('./controllers/habibiController');
app.use('/habibi', habibiController);

// MUCHAMAD GILANG NAURI RAHARDIAN
const gilangController = require('./controllers/gilangController');
app.use('/gilang', gilangController);

// MUTIARA NURAISYAH DINDA R
const mutiaraController = require('./controllers/mutiaraController');
app.use('/mutiara', mutiaraController);

// MUSTAGHFIRI ASHAR
const musController = require('./controllers/musController');
app.use('/mus', musController);

// TEGAR OKTAVIANTO SIMBOLON
const tegarController = require('./controllers/tegarController');
app.use('/tegar', tegarController);

// Nazwa Nurfadhilla Phitri
const nazwaController = require('./controllers/nazwaController');
app.use('/nazwa', nazwaController);

// MOCHAMAD ALGI ALBIAGI
const algiController = require('./controllers/algiController');
app.use('/algi', algiController);

// Putu Erlina Ayu Tiara Putri
const erlinaController = require('./controllers/erlinaController');
app.use('/erlina', erlinaController);

// Aprianto
const apriantoController = require('./controllers/apriantoController');
app.use('/aprianto', apriantoController);

// SHOFHAH RAIHANASARI
const raihanController = require('./controllers/raihanController');
app.use('/raihan', raihanController);

// Febry Selliyani Hutajulu
const febryController = require('./controllers/febryController');
app.use('/febry', febryController);

// Ellsza Ridzky Khoirunnisa
const ellszaController = require('./controllers/ellszaController');
app.use('/ellsza', ellszaController);

// Suradi Bayu Pamungkas
const suradiController = require('./controllers/suradiController');
app.use('/suradi', suradiController);

// KALYA TSABITA
const kalyaController = require('./controllers/kalyaController');
app.use('/kalya', kalyaController);

// Ilham Julaiman
const ilhamController = require('./controllers/ilhamController');
app.use('/ilham', ilhamController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});