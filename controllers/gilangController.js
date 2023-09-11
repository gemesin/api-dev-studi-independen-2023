const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Gilang');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'M.Gilang Nauri Rahardian',
    namaPanggilan: 'Gilang',
    tempatLahir: 'Nganjuk',
    tanggalLahir:'03 Desember 2002',
    umur:'20',
    domisili:'Nganjuk',
    universitas:'UN PGRI-Kediri',
    jurusan:'Teknik Informatika',
    semester: '5',
  })
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