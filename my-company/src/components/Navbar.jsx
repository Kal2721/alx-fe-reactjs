import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav style={{ backgroundColor: 'gray', color: 'white', marginTop: '0'}}>
			<ul style={{ listStyle: 'none', color: 'white', display: 'flex', gap: '1rem', alignContent: 'center', justifyContent: 'center' }}>
				<li>
					<Link to="/">Home</Link>
				</li>
		                                <li>
                                        <Link to="/about">About</Link>
                                </li>
		                                <li>
                                        <Link to="/services">Services</Link>
                                </li>
		                                <li>
                                        <Link to="/contact">Contact</Link>
                                </li>
			</ul>
		</nav>
	);
}

export default Navbar;
