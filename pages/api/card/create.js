import { dbConnect } from '../../../src/lib/database';
import Card from '../../../src/models/Card';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		const newCardData = JSON.parse(request.body);
		await dbConnect();

		const newCard = await Card.create({ ...newCardData });

		response.status(200).json({
			message: 'Card Create',
			card: newCard,
		});
	} else {
		response.status(400).json({ error: 'Wrong Method' });
	}
}
