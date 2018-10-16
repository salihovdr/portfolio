import React from 'react';
import Brief from './Brief';
import Bio from './Bio';

export default function Intro(){
	return(
		<div className='container' id='aboutMe'>
			<div className='row'>
				<div className='col-12 intro'>
					<Brief />
					<Bio />
				</div>
			</div>
		</div>
	);
}