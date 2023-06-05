const express = require('express');

const mahasiswaCtrl = require('../controllers/MahasiswaController');

const app = express.Router();

app.get('/mahasiswa', mahasiswaCtrl.getAllMahasiswa);
app.post('/mahasiswa', mahasiswaCtrl.postMahasiswa);
app.get('/mahasiswa/:id', mahasiswaCtrl.getOneMahasiswa);
app.put('/mahasiswa/:id', mahasiswaCtrl.putMahasiswa);
app.delete('/mahasiswa/:id', mahasiswaCtrl.deleteMahasiswa);

module.exports = app;
