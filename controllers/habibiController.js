const express = require('express');
const router = express.Router();

router.get('/habibi', (req, res) => {
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
    })
  });

  router.post('/simple-calculator', (req, res) => {
    const data = req.body;
    const operasi = data.operasi;
    const angka1 = parseFloat(data.angka1);
    const angka2 = parseFloat(data.angka2);

    let hasil;  
    switch (operasi) {
      case 'penjumlahan':
        hasil = angka1 + angka2;
        break;
      case 'pengurangan':
        hasil = angka1 - angka2;
        break;
      case 'perkalian':
        hasil = angka1 * angka2;
        break;
      case 'pembagian':
        if (angka2 === 0) {
          return res.status(400).json({ error: 'Tidak dapat membagi dengan nol' });
        }
        hasil = angka1 / angka2;
        break;
      default:
        return res.status(400).json({ error: 'Operasi tidak valid' });
    }
    res.json({hasil});
      });
module.exports = router;