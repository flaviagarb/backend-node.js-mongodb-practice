import createError from "http-errors";
import express from 'express';
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import homeRouter from './controllers/homeController.js'
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import { fileURLToPath } from 'url';


var app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// public: acceder directamente desde navegador ; path.join correcto desde cualquier SO ; __dirname ubicacion del archivo actual
app.use(express.static(path.join(__dirname, 'public')));

// esto es importante: va en orden de prioridades
app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;
