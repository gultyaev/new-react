import React from 'react';
import {Link} from 'react-router'

const Header = () => {
    return (
		<nav>
			<div className="nav-wrapper">
				<ul className="right">
					<li><Link to="main">Main</Link></li>
					<li><a href="">Forum</a></li>
					<li><a href="">About</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;