const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Ilham');
});

router.get('/profile', (req, res) => {
  res.send({
    namaLengkap: 'Ilham Jul Aiman',
    namaPanggilan: 'Joule',
    tempatLahir: 'Tasikmalaya',
    tanggalLahir: '12 Febuari 2002',
    umur: '21 Tahun',
    domisili: 'Yogyakarta',
    universitas: 'Universitas Ahmad Dahlan',
    jurusan: 'SI Sistem Informasi',
    semester: '5',
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
  res.json({hasil})
})

module.exports = router;