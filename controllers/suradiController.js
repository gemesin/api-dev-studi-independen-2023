const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Suradi');
});

router.get('/profile', function(req,res) {
  const datadiri = {
    namaLengkap: 'Suradi Bayu',
    namaPanggilan: 'suradi',
    tempatLahir: 'Yogyakarta',
    tanggalLahir: '28-04-2000',
    umur: 23,
    domisili: 'Yogya',
    universitas: 'UNY',
    jurusan: 'Teknik Mekatronika',
    semester: 4
  }
  res.send(datadiri)
})

module.exports = router;