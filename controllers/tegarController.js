const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Tegar');
});

router.get('/profile', (req, res) => {
  res.send({
   namaLengkap : 'Tegar Oktavianto Simbolon' ,
  namaPanggilan : 'Tegar',
tempatLahir: 'Bangkalan',
tanggalLahir : '09-10-2002',
umur : '20',
domisili: 'Jawa Timur',
universitas: 'UPNVJT',
jurusan: 'SI',
semester: '5',
  });
});

module.exports = router;