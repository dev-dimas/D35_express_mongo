const Mahasiswa = require('../models/MahasiswaModel');

const getAllMahasiswa = async (req, res, next) => {
  try {
    const data = await Mahasiswa.find({});
    res.send({ data, error: false });
  } catch (err) {
    const error = new Error('Something went wrong! :(.');
    error.status = 500;
    next(error);
  }
};

const getOneMahasiswa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Mahasiswa.findById(id);
    if (!data) {
      throw new Error('Not found!.');
    }
    res.send({ data, error: false });
  } catch (err) {
    err.message = 'Not found!.';
    err.status = 404;
    next(err);
  }
};

const postMahasiswa = async (req, res, next) => {
  try {
    const { nama, nim, kelas, jenis_kelamin } = req.body;
    if (nama && nim && kelas && jenis_kelamin) {
      const newData = { nama, nim, kelas, jenis_kelamin };
      await Mahasiswa.create(newData);
      res.send({ new_data: newData, error: false });
    } else {
      throw new Error('Bad request!.');
    }
  } catch (err) {
    if (err.message) {
      err.status = 400;
    } else {
      err.message = 'Something went wrong! :(.';
      err.status = 500;
    }
    next(err);
  }
};

const putMahasiswa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nama, nim, kelas, jenis_kelamin } = req.body;
    if (nama && nim && kelas && jenis_kelamin) {
      const updatedData = { nama, nim, kelas, jenis_kelamin };
      await Mahasiswa.findByIdAndUpdate(id, updatedData);
      res.send({ updated_data: updatedData, error: false });
    } else {
      throw new Error('Bad request!.');
    }
  } catch (err) {
    if (err.message) {
      err.status = 400;
    } else {
      err.message = 'Something went wrong! :(.';
      err.status = 500;
    }
    next(err);
  }
};

const deleteMahasiswa = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Mahasiswa.findByIdAndDelete(id);
    res.send({ message: 'OK!', error: false });
  } catch (err) {
    err.message = 'Not found!.';
    err.status = 404;
    next(err);
  }
};

module.exports = { getAllMahasiswa, getOneMahasiswa, postMahasiswa, putMahasiswa, deleteMahasiswa };
