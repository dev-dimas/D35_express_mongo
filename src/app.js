const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');

const errorMiddleware = require('./middlewares/errorMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');

const mahasiswaRoute = require('./routes/mahasiswa');
const mataKuliahRoute = require('./routes/mata-kuliah');
const connectDB = require('./database');

const app = express();
const upload = multer();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.any());

app.use('/api', mahasiswaRoute);
app.use('/api', mataKuliahRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
