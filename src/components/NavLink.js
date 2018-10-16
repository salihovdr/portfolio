import React from 'react';

export default function NavLink(props){
	return (
		<li>
			<a href={props.href}> {props.link}</a>
		</li>
	);
}