const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://diogo11:mahoeeee11@cluster0-nmvds.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors( {origin: 'http://localhost:3000 '} ));

app.listen(3333);