const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Wawan');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Kurnia Setyo Hermawan',
    namaPanggilan: '',
    tempatLahir: '',
    tanggalLahir: '',
    umur: '',
    domisili: '',
    universitas: '',
    jurusan: '',
    semester: '',
  })
})

module.exports = router;