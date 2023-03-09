import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/portafolio')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))