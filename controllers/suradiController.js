const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.send('Hello nama saya Suradi');
});

router.get('/profile', function(req,res) {
  const datadiri = {
    namaLengkap: 'Suradi Bayu',
    namaPanggilan: 'suradi',
    tempatLahir: 'Yogyakarta',
    tanggalLahir: '28-04-2000',
    umur: 23,
    domisili: 'Yogya',
    universitas: 'UNY',
    jurusan: 'Teknik Mekatronika',
    semester: 9
  }
  res.send(datadiri);
})

router.post("/simple-calculator", function(req,res){
  const operasi = req.body.operasi
  const angka1 = req.body.angka1
  const angka2 = req.body.angka2
  var hasil

  switch(operasi){
    case "+":
      hasil = angka1 + angka2
      res.send(angka1 + " + " + angka2 + " = " + hasil)
      break
    case "-":
      hasil = angka1 - angka2
      res.send(angka1 + " - " + angka2 + " = " + hasil)
      break
    case "*":
      hasil = angka1 * angka2
      res.send(angka1 + " * " + angka2 + " = " + hasil)
      break
    case "/":
      hasil = angka1 / angka2
      res.send(angka1 + " / " + angka2 + " = " + hasil)
      break
    default:
      break
  }})
module.exports = router;