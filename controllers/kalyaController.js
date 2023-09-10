const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Kalya');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Kalya Tsabita',
    namaPanggilan: 'Kalya',
    tempatLahir: 'Surabaya',
    tanggalLahir: '20 Januari 2003',
    umur: '20 Tahun',
    domisili: 'Surabaya',
    universitas: 'Politeknik Elektronika Negeri Surabaya',
    jurusan: 'D4 Teknik Telekomunikasi',
    semester: '7',
  })
})

router.post('/simple-calculator', (req, res) => {
  const operasi = req.body.operasi
  const angka1 = req.body.angka1
  const angka2 = req.body.angka2
  var hasil

  switch(operasi) {
    case "penjumlahan":
      hasil = angka1 + angka2
      break
    case "pengurangan":
      hasil = angka1 - angka2
      break
    case "perkalian":
      hasil = angka1 * angka2
      break
    case "pembagian":
      if (angka2 === 0) {
        return json({ error : "Pembagian oleh nol tidak dapat dilakukan" })
      }
      hasil = angka1 / angka2
      break
    default:
      return json({ error : "Operasi tidak valid" }), 400
  }
  req.json({hasil})
})

module.exports = router;