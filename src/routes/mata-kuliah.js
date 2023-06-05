const express = require('express');

const mataKuliahCtrl = require('../controllers/MataKuliahController');

const app = express.Router();

app.get('/mata-kuliah', mataKuliahCtrl.getAllMataKuliah);
app.post('/mata-kuliah', mataKuliahCtrl.postMataKuliah);
app.get('/mata-kuliah/:id', mataKuliahCtrl.getOneMataKuliah);
app.put('/mata-kuliah/:id', mataKuliahCtrl.putMataKuliah);
app.delete('/mata-kuliah/:id', mataKuliahCtrl.deleteMataKuliah);

module.exports = app;
