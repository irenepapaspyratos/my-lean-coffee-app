import { getCards } from '../../../src/services/get-cards';
import Card from '../../../src/models/Card';

export default async function handler(request, response) {
	const { id } = request.query;

	/*
	const cards = getCards();
	const index = cards.findIndex((card) => card.id === id);
	*/

	if (request.method === 'DELETE') {
		const deletedCard = await Card.findByIdAndDelete(id);
		response
			.status(200)
			.json({ message: 'card deleteed', card: deletedCard }); //before: cards[index]
	} else if (request.method === 'PUT') {
		const changedCardData = JSON.parse(request.body);
		const changedCard = await Card.findByIdAndUpdate(id, changedCardData, {
			new: true,
		});
		response
			.status(200)
			.json({ message: 'card deleteed', card: changedCard });
	} else {
		const singleCard = await Card.findById(id);
		response.status(200).json(singleCard); //before: cards[index]
	}

	/*const singleCard = cards.filter((card) => card.id === id);
	else => response.status(200).json({ singleCard });*/
	/*const singleCard = cards.find((card) => card.id === id);
    else => response.status(200).json(singleCard);*/
}
