import React from 'react';

export default function Contacts(){
	return (
		<div id='contacts'>
			<h2 className='col-12 section-heading'>
            CONTACTS
			</h2>
			<hr className='col-12' />
			<div>
				<div className='col-8 right'>
					<p id='resume'><a href="https://s3.us-east-2.amazonaws.com/mydocsrepo/WebDev+Resume.pdf" download='Dan_Salikhov_Resume'>Resume</a></p>
				</div>
				<div className='col-4 right'>
					<a href="mailto:salihovdr@gmail.com"><img src='https://s3.us-east-2.amazonaws.com/stacklogos/social+media+logos/Email.svg' alt='Email' /></a>

					<a href="https://twitter.com/DonicS"><img src='https://s3.us-east-2.amazonaws.com/stacklogos/social+media+logos/twitter.svg' alt='Twitter' /></a>
					
					<a href="https://www.linkedin.com/in/daniyarsalikhov/"><img src='https://s3.us-east-2.amazonaws.com/stacklogos/social+media+logos/Linked+in.svg' alt='LinkedIn' /></a>

					<a href="hhttps://github.com/salihovdr/"><img src='https://s3.us-east-2.amazonaws.com/stacklogos/social+media+logos/GitHub+circle.svg' alt='GitHub' /></a>

				</div>
			</div>
		</div>
	);
}