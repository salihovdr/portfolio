import React from 'react';

export default function ProjectItem(props){
	return (
		<div className='project'>
			<div className='col-7 imagebox'>
				<img src={props.img} alt={props.alt}/>
			</div>
			<div className='col-5 description'>
				<div className='project-desc'><span className='strong'>What:</span> {props.description}</div>
				<div><span className='strong'>Tech stack:</span> {props.stack}</div>
				<div className='links'>
					<span className='strong'><a href={props.repo}>Github repo</a></span> | 
					<span className='strong'><a href={props.deployed}> Deployed app</a></span>
				</div>
			</div>
		</div>
	);
}