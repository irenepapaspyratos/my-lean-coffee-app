import mongoose from 'mogoose';

const cardSchema = new mongoose.Schema({ content: String, name: String });

const Card = mongoose.models.Card ?? mongoose.model('Card', cardSchema);

export default Card;
