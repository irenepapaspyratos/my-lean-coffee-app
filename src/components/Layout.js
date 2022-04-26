import { Container } from '@mui/material';
import Header from './Header';
export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Container maxWidth='xL' sx={{ marginTop: '6rem' }}>
				{children}
			</Container>
		</>
	);
}
