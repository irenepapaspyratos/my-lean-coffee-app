import { dbConnect } from '../../../src/lib/database';
import Card from '../../../src/models/Card';
import User from '../../../src/models/User';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		const newCardData = JSON.parse(request.body);
		await dbConnect();

		let user = await User.findOne({ name: newCardData.name });
		if (!user) {
			user = await User.create({ name: newCardData.name });
		}

		const newCard = await Card.create({
			content: newCardData.content,
			user: user.id,
		}); // before:  ...newCardData

		response.status(200).json({
			message: 'Card Create',
			card: newCard,
		});
	} else {
		response.status(400).json({ error: 'Wrong Method' });
	}
}
