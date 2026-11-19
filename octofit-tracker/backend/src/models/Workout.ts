import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: String,
  focus: { type: String, required: [true, 'O foco do treino é obrigatório.'] },
  minutes: { type: Number, required: [true, 'A duração em minutos é obrigatória.'] },
  difficulty: { type: String, required: [true, 'A dificuldade é obrigatória.'] },
});

export const Workout = model('Workout', workoutSchema);
