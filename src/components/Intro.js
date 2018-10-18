import React from 'react';
import Brief from './Brief';
import Bio from './Bio';

export default function Intro(){
	return(
		<div id='aboutMe'>
			<div className='col-12 intro'>
				<Brief />
				<Bio />
			</div>
		</div>
	);
}