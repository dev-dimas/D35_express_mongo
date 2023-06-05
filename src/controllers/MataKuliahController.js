const MataKuliah = require('../models/MataKuliahModel');

const getAllMataKuliah = async (req, res, next) => {
  try {
    const data = await MataKuliah.find({});
    res.send({ data, error: false });
  } catch (err) {
    const error = new Error('Something went wrong! :(.');
    error.status = 500;
    next(error);
  }
};

const getOneMataKuliah = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await MataKuliah.findById(id);
    res.send({ data, error: false });
  } catch (err) {
    err.message = 'Not found!.';
    err.status = 404;
    next(err);
  }
};

const postMataKuliah = async (req, res, next) => {
  try {
    const { kode, nama, sks, kelas } = req.body;
    if (kode && nama && sks && kelas) {
      const newData = { kode, nama, sks, kelas };
      await MataKuliah.create(newData);
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

const putMataKuliah = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { kode, nama, sks, kelas } = req.body;
    if (kode && nama && sks && kelas) {
      const updatedData = { kode, nama, sks, kelas };
      await MataKuliah.findByIdAndUpdate(id, updatedData);
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

const deleteMataKuliah = async (req, res, next) => {
  try {
    const { id } = req.params;
    await MataKuliah.findByIdAndDelete(id);
    res.send({ message: 'OK!', error: false });
  } catch (err) {
    err.message = 'Not found!.';
    err.status = 404;
    next(err);
  }
};

module.exports = { getAllMataKuliah, getOneMataKuliah, postMataKuliah, putMataKuliah, deleteMataKuliah };
