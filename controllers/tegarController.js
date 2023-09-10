const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello nama saya Tegar');
});

router.get('/profile', (req, res) => {
  res.send({
   namaLengkap : 'Tegar Oktavianto Simbolon' ,
  namaPanggilan : 'Tegar',
  tempatLahir: 'Bangkalan',
  tanggalLahir : '09-10-2002',
  umur : '20',
  domisili: 'Jawa Timur',
  universitas: 'UPNVJT',
  jurusan: 'SI',
  semester: '5',
  });
});

app.post('/simple-calculator', function(req, res){
  const oprasi = req.body.oprasi
  const angka1 = req.body.angka1;
  const angka2 = req.body.angka2;
  let hasil;

  switch (oprasi) {
    case '+':
        hasil = angka1 + angka2;
        res.send('Hasil penjumlahan '+angka1+ " + "+angka2 + " = " + hasil);
        break;
    case '-':
        hasil = angka1 - angka2;
        res.send('Hasil pengurangan '+angka1+ " - "+angka2 + " = " + hasil);
        break;
    case '*':
        hasil = angka1 * angka2;
        res.send('Hasil perkalian '+angka1+ " * "+angka2 + " = " + hasil);
        break;
    case '/':
        if (angka2 !== 0) {
            hasil = angka1 / angka2;
            res.send('Hasil pembagian '+angka1+ " / "+angka2 + " = " + hasil);
        } else {
            return res.status(400).json({ error: "Pembagian dengan nol tidak valid." });
        }
        break;
    default:
        return res.status(400).json({ error: "Operator tidak valid." });
}
});

module.exports = router;