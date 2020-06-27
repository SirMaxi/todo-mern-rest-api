const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

//BodyParser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose
    .connect(db, {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex:true 
    })
    .then( () => console.log('MongoDB Conected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Servimos los archivos estaticos si estamos en produccion
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));