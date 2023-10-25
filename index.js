const express = require('express');
const blogRoutes = require('./routes/blog-routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


dotenv.config({ path: __dirname + '/.env' });
const app = express();

app.engine('ejs',ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(blogRoutes);
app.set('view engine', 'ejs');


const db = process.env['MONGO_URL'];
mongoose
    .connect(db)
    .then((res) => console.log('Connected to remote DB'))
    .catch((error) => console.log(`Error with code ${error}`));

app.listen(3000, () => {
    console.log('Running server on port 3000');
})