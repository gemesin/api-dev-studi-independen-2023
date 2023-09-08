const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Mutiara');
});



router.post('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Mutiara Nuraisyah Dinda Rifliansah',
    namaPanggilan: 'Mutiara',
    tempatLahir: 'Sidoarjo',
    tanggalLahir: '6 Agustus 2003',
    umur: '20',
    domisili: 'Sidoarjo',
    universitas: 'ITS',
    jurusan: 'Teknologi Informasi',
    semester: '7'
  })
});


router.post('/simple-calculator', (req, res) => {
    const operasi = req.body.operasi;
    const angka1 = req.body.angka1;
    const angka2 = req.body.angka2;
    let result;

   switch (operasi) {
    case 'penjumlahan':
      result = angka1 + angka2;
      break;
    case 'pengurangan':
      result = angka1 - angka2;
      break;
    case 'perkalian':
      result = angka1 * angka2;
      break;
    case 'pembagian':
      if (angka2 === 0) {
        return res.status(400).json({ error: 'Pembagian dengan nol tidak diizinkan.' });
      }
      result = angka1 / angka2;
      break;
    default:
      return res.status(400).json({ error: 'Operasi yang valid adalah penjumlahan, pengurangan, perkalian, atau pembagian.' });
  }

    res.json({result}); 
});
module.exports = router;