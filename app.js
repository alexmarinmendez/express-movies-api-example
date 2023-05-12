const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRoutes');
const authRouter = require('./Routes/authRouter')
const CustomError = require('./Utils/CustomError');
const globalErrorHandler = require('./Controllers/errorController')

let app = express();

app.use(express.json());

app.use(express.static('./public'))

app.use('/api/v1/movies', moviesRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on the server!`
    });
});

module.exports = app;

