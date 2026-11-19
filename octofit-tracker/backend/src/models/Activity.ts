import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: [true, 'A pessoa é obrigatória.'] },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: [true, 'A equipe é obrigatória.'] },
  type: { type: String, required: [true, 'O tipo de atividade é obrigatório.'] },
  minutes: { type: Number, required: [true, 'A duração em minutos é obrigatória.'] },
  points: { type: Number, required: [true, 'A pontuação é obrigatória.'] },
  occurredAt: { type: Date, required: [true, 'A data da atividade é obrigatória.'] },
});

export const Activity = model('Activity', activitySchema);
