import React from 'react';

export default function ProjectItem(props){
	return (
		<div className='project row'>
			<div className='col-4 imagebox'>
				<img src={props.img} alt={props.alt}/>
			</div>
			<div className='col-8 description'>
				<div className='project-desc'><span className='strong'>{props.title}:</span> {props.description}</div>
				<div><span className='strong'>Tech stack:</span> {props.stack}</div>
				<div className='links'>
					<span><a href={props.repo}>Github repo</a></span> | 
					<span><a href={props.deployed}> Deployed app</a></span>
				</div>
			</div>
		</div>
	);
}