const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Ellsza');
});

router.get('/profile', function(req,res) {
  const datadiri = {
    namaLengkap: 'Ellsza Ridzky Khoirunnisa',
    namaPanggilan: 'Ellsza',
    tempatLahir: 'Tangerang',
    tanggalLahir: '13 Juli 2003',
    umur: 20,
    domisili: 'Tangerang',
    jurusan: 'Teknik Informatika',
    universitas: 'Esa Unggul',
    semester: 5
  }
  res.send(datadiri);
})

router.post('/simple-calculator', (req, res) => {
  const { operasi, angka1, angka2 } = req.body;

  if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
    res.status(400).json({ error: 'angka1 dan angka2 harus berupa angka' });
    return;
  }
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
        res.status(400).json({ error: 'Tidak dapat membagi dengan nol' });
        return;
      }
      hasil = angka1 / angka2;
      break;
    default:
      res.status(400).json({ error: 'Operasi tidak valid' });
      return;
  }
  res.json({ hasil });
});
module.exports = router;