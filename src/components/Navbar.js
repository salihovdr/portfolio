import React from 'react';
import NavLink from './NavLink';

export default function Navbar(){
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='row'>
					<ul className='col-12'> 
						{/* <NavLink href={'#aboutMe'} link={'about me'}/> */}
						<NavLink href={'#projects'} link={'projects'}/>
						<NavLink href={'#contacts'} link={'contacts'}/>
					</ul>
				</div>
			</div>
		</nav>
	);
}