const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Kalya');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Kalya Tsabita',
    namaPanggilan: 'Kalya',
    tempatLahir: 'Surabaya',
    tanggalLahir: '20 Januari 2003',
    umur: '20 Tahun',
    domisili: 'Surabaya',
    universitas: 'Politeknik Elektronika Negeri Surabaya',
    jurusan: 'D4 Teknik Telekomunikasi',
    semester: '7',
  })
})

module.exports = router;