const mongoose = require('mongoose');

const mataKuliahSchema = new mongoose.Schema(
  {
    kode: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    sks: {
      type: Number,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'mata_kuliah',
    versionKey: false,
  }
);

const MataKuliah = mongoose.model('mata_kuliah', mataKuliahSchema);

module.exports = MataKuliah;
