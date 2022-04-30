import { Typography } from '@mui/material';
import { SWRConfig } from 'swr';
import CardGrid from '../src/components/cardGrid';
import { getCards } from '../src/services/get-cards';
import swrFetcher from '../src/lib/swr-fetcher';

export function getStaticProps() {
	const cards = getCards();

	return {
		props: {
			/*cards,*/
			fallback: {
				'/api/cards': cards /* or [] instead of cards */,
			},
		},
	};
}

export default function Cards({ /*cards*/ fallback }) {
	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			<Typography variant='h1'>Cards</Typography>
			<CardGrid /*cards={cards}*/ />
		</SWRConfig>
	);
}
/* oder curry: cards und unten dann auch curry */

/*
ODER für jeden User neu:
export function getServerSideProps() {
}
*/
