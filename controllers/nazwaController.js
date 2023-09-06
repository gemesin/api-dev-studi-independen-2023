const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Nazwa');
});

router.get('/profile', (req,res) => {
  res.send({
    namaLengkap : 'Nazwa Nurfadhilla Phitri',
    namaPanggilan : 'Nazwa',
    tempatLahir : 'Bekasi',
    tanggalLahir : '6-12-2003',
    umur : '19',
    domisili : 'Bekasi',
    universitas : 'Universitas Negeri Padang',
    jurusan : 'Informatika',
    semester : '5'
  })
})

module.exports = router; 
