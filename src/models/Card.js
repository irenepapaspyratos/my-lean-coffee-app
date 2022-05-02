import mongoose from 'mongoose';
import User from './User'; // not used, but sometimes needed for ref bc loading-delay

//const cardSchema = new mongoose.Schema({ content: String, name: String });
const cardSchema = new mongoose.Schema({
	content: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Card = mongoose.models.Card ?? mongoose.model('Card', cardSchema);

export default Card;

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Typischer FEHLER bei geänderten Models:
Daten aus der DB mit alter Struktur werden als Fehler gelistet !
=> Diese Daten müssen angepasst oder gelöscht werden.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
