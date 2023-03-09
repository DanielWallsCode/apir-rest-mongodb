import { Schema,model } from "mongoose";

const proyectoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    documentation:{
        type: String
    }
})

export default model('Proyecto', proyectoSchema);