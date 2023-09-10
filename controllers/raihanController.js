const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Raihana');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: "Shofhah Raihanasari",
    namaPanggilan: "Raihana",
    tempatLahir: "Banjarbaru",
    umur: "20",
    domisili: "Tanah Laut",
    universitas: "Politeknik Negeri Tanah Laut",
    jurusan: "Agroindustri",
    semester: "5",

  })})
module.exports = router;