const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Soman');
});

router.get('/profile', (req, res) => {
  res.send({
    namalengkap: 'Abdul Soman Pohan',
    namapanggilan: 'Soman',
    tempatlahir: 'Purba Sinomba',
    tanggallahir: '2 Februari 2003',
    umur: '21',
    domisili: 'Blang pulo',
    universitas: 'Malikussaleh',
    jurusan: 'Ilmu Politik',
    semester: '5',
  })
})

module.exports = router;
