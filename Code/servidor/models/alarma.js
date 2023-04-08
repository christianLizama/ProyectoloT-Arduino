import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const alarmaSchema = new Schema({
    tiempo: {type: String, required: [true, 'Tiempo obligatorio']},
});

const alarma = mongoose.model('Alarma', alarmaSchema);

export default alarma;