import { Schema, model } from "mongoose";

const contactoSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required:true
    },

    message: {
        type: String,
        required:true
    }
});

export default model('Contacto',contactoSchema);