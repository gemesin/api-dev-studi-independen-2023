const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Gilang');
});

router.get('/profile', (req, res) => {
  res.send({
    nama: 'sya',
    ttl: '',
    umur:'',
    domisili:'',
    universitas:'',
    jurusan:'',
  })
})


module.exports = router;