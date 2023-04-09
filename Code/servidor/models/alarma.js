import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const alarmaSchema = new Schema({
    fecha: {type: String, required: [true, 'Fecha obligatoria']},
    tiempo: {type: String, required: [true, 'Tiempo obligatorio']},
    hora : {type: String, required: [true, 'Tiempo obligatorio']},
    minuto : {type: String, required: [true, 'Tiempo obligatorio']},
    segundo : {type: String, required: [true, 'Tiempo obligatorio']}
});

const alarma = mongoose.model('Alarma', alarmaSchema);

export default alarma;