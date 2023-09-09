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

router.post('/simple-calculator', function(req, res){
  const operasi = req.body.operasi
  const angka1 = req.body.angka1
  const angka2 = req.body.angka2
  var hasil

  switch (operasi) {
    case "+":
      hasil = angka1 + angka2
      res.send(angka1 + " + " + angka2 + " = " + hasil)
      break;
    case "-":
        hasil = angka1 + angka2
        res.send(angka1 + " - " + angka2 + " = " + hasil)
        break;
    case "*":
          hasil = angka1 + angka2
          res.send(angka1 + " * " + angka2 + " = " + hasil)
          break;
    case "/":
            hasil = angka1 + angka2
            res.send(angka1 + " / " + angka2 + " = " + hasil)
            break;          
    default:
      break;
  }})


module.exports = router;