const express = require('express');
const router = express.Router();
 
router.get('/', (req, res) => {
  res.send('Hello nama saya Nazwa');
});

router.get('/profile', (req,res) => {
  res.send({
    namaLengkap : 'Nazwa Nurfadhilla Phitri',
    namaPanggilan : 'Nazwa',
    tempatLahir : 'Bekasi',
    tanggalLahir : '6-12-2003',
    umur : '19',
    domisili : 'Bekasi',
    universitas : 'Universitas Negeri Padang',
    jurusan : 'Informatika',
    semester : '5'
  })
})

router.post('/simple-calculator', (req, res) => {
  const operasi = req.body.operasi;
  const angka1 = req.body.angka1;
  const angka2 = req.body.angka2;
  let result;

  switch (operasi) {
      case 'penjumlahan':
          result = angka1 + angka2;
          res.send('Hasil penjumlahan dari ' + angka1 + ' + ' + angka2 + ' = ' + result);
          break;
      case 'pengurangan':
          result = angka1 - angka2;
          res.send('Hasil pengurangan dari ' + angka1 + ' - ' + angka2 + ' = ' + result);
          break;
      case 'perkalian':
          result = angka1 * angka2;
          res.send('Hasil perkalian dari ' + angka1 + ' * ' + angka2 + ' = ' + result);
          break;
      case 'pembagian':
          if (angka2 === 0) {
              return res.status(400).json({ error: 'Pembagian dengan nol tidak diizinkan.' });
          }
          result = angka1 / angka2;
          res.send('Hasil pembagian dari ' + angka1 + ' / ' + angka2 + ' = ' + result);
          break;
      default:
          return res.status(400).json({ error: 'Operasi yang valid adalah penjumlahan, pengurangan, perkalian, atau pembagian.' });
  }
});

module.exports = router; 
