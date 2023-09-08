const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Mutiara');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Mutiara Nuraisyah Dinda Rifliansah',
    namaPanggilan: 'Mutiara',
    tempatLahir: 'Sidoarjo',
    tanggalLahir: '6 Agustus 2003',
    umur: '20',
    domisili: 'Sidoarjo',
    universitas: 'ITS',
    jurusan: 'Teknologi Informasi',
    semester: '7'
  })
});

module.exports = router;