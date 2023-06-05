const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/express-mongo');
    console.log('MongoDB terhubung');
  } catch (error) {
    console.error('Koneksi MongoDB gagal:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
