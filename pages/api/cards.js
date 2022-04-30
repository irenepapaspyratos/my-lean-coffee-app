import { getCards } from '../../src/services/get-cards';

export default async function handler(request, response) {
	const cards = await getCards();

	response.status(200).json(cards);
}

/*
export default function handler(req, res) {
   const cards = getCards();

   cards.push({
     id: 1,
     content: 'Testy test',
     name: 'Testname',
   });

   	response.status(200).json(cards);
}
*/
