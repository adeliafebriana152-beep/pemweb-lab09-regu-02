
const express = require('express');
const router = express.Router();

const daftarPeminjaman = [
  {
    id: 1,
    nimAnggota: '42530001',
    namaAnggota: 'Abelia',
    idBuku: 1,
    judulBuku: 'Arsitektur Node.js Modern',
    status: 'Dipinjam'
  },
  {
    id: 2,
    nimAnggota: '42530002',
    namaAnggota: 'Clara',
    idBuku: 2,
    judulBuku: 'Rekayasa Perangkat Lunak',
    status: 'Dikembalikan'
  }
];

router.get('/', (req, res) => {
  res.json({
    modul: 'Peminjaman Buku',
    total: daftarPeminjaman.length,
    data: daftarPeminjaman
  });
});

module.exports = router;