/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css'

// Logo
import Logo from "../../assets/images/nutrigain-logo.png"

export default function index() {
	const [scrollPosition, setScrollPosition] = React.useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	return (
		<Navbar bg="white" variant="light">
			<Container>
				<Navbar.Brand>
					<img src={Logo} width="100" alt="nutrigain logo" />
				</Navbar.Brand>
				<Nav className={styles.navLinks} style={{ alignItems: "center" }}>
					<Nav.Link>Home</Nav.Link>
					<Nav.Link>Reviews</Nav.Link>
					<Nav.Link>Track Your Orders</Nav.Link>
					<Nav.Link>Meal Plan</Nav.Link>
					<Nav.Link>Weight Calculator</Nav.Link>
					<button className={styles.buttonClass}>
						Shop Now
					</button>
				</Nav>
			</Container>
		</Navbar>
	);
}