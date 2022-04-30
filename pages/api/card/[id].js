import { getCards } from '../../../src/services/get-cards';

export default function handler(request, response) {
	const { id } = request.query;
	const cards = getCards();

	const index = cards.findIndex((card) => card.id === id);

	if (request.method === 'DELETE') {
		response
			.status(200)
			.json({ message: 'card deleteed', card: cards[index] });
	} else if (request.method === 'PUT') {
		const changeCard = JSON.parse(
			request.body
		); /* eigentlich mit try/catch*/
		response
			.status(200)
			.json({ message: 'card deleteed', card: changeCard });
	} else {
		response.status(200).json(cards[index]);
	}

	/*const singleCard = cards.filter((card) => card.id === id);
	else => response.status(200).json({ singleCard });*/
	/*const singleCard = cards.find((card) => card.id === id);
    else => response.status(200).json(singleCard);*/
}
