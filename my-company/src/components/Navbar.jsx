import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', alignContent: 'center', justifyContent: 'center' }}>
				<li>
					<Link to="/">Home</Link>
				</li>
		                                <li>
                                        <Link to="/">Home</Link>
                                </li>
		                                <li>
                                        <Link to="/">Home</Link>
                                </li>
		                                <li>
                                        <Link to="/">Home</Link>
                                </li>
			</ul>
		</nav>
	);
}

export default Navbar;
