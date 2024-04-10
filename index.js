const express = require('express');
const blogRoutes = require('./routes/blog-routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')
const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


dotenv.config({ path: __dirname + '/.env' });
const app = express();

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(blogRoutes);
app.set('view engine', 'ejs');


const db = process.env['MONGO_URL'];
mongoose
    .connect(db)
    .then((res) => console.log('Connected to remote DB'))
    .catch((error) => console.log(`Error with code ${error}`));

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});

app.use((err, req, res, next) => {
    const { message = 'Something went wrong', statusCode = 500 } = err;
    res.status(statusCode).render('error', {err});
})

app.listen(3000, () => {
    console.log('Running server on port 3000');
})