const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Habibi');
});
router.get('/profile', (req, res) => {
  res.send({
    namaLengkap:"Azki Alfarisi ",

    namaPanggilan:" habibi",

    tempatLahir:"jakarta",
    tanggalLahir:"09 April 2023",

    umur:"20",
    domisili:"Jakarta",
    universitas:"UPN veteran Jakarta",
    jurusan:"Teknik elektro",
    semester:"5",
  });
});
module.exports = router;