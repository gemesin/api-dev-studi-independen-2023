const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Gilang');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'M.Gilang Nauri Rahardian',
    namaPanggilan: 'Gilang',
    ttl: 'Nganjuk,03 Desember 2002',
    umur:'20',
    domisili:'Nganjuk',
    universitas:'UN PGRI-Kediri',
    jurusan:'Teknik Informatika',
    semester: '5',
  })
})

module.exports = router;