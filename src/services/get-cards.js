import Card from '../models/Card';
import { dbConnect } from '../lib/database';

export const getCards = async () => {
	await dbConnect();
	const data = await Card.find();
	return data.map(({ id, content, name }) => ({ id, content, name }));
};

/*
import data from './static-cards.json';

export const getCards = () => {
	return data;
};
*/
