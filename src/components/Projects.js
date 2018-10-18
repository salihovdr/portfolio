import React from 'react';
import ProjectItem from './ProjectItem';

export default function Projects(){
	return (
		<div id='projectList'>
			<div>
				<h2 className='col-12 section-heading'><a href='projects' name='projects'>PROJECTS</a></h2>
				<hr className='col-12' />
				<ProjectItem 
					title={'Privet!'}
					img={'https://s3.amazonaws.com/donics/Screen+Shot+2018-09-14+at+17.18.41.png'} 
					alt={'Privet -- app for learning Russian'}
					description={'App for learning Russian vocabulary. Privet uses a Spaced Repetition algorithm to speed up your learning. As you answer words correctly, the app will show you those words less frequently. If you guess the wrong answer, you will be given more opportunities to practice that word.'}
					stack={'React/Redux/CSS Grid'}
					repo={'https://github.com/salihovdr/privet-client'}
					deployed={'https://privet-hello.herokuapp.com/'} 
				/>
				<ProjectItem
					title={'Let\'s Hoop!'}
					img={'https://s3.us-east-2.amazonaws.com/hoops-dannny/Screen+Shot+2018-08-17+at+16.21.17.png'} 
					alt={'Let\'s Hoop! -- app for posting basketball event info in Arlington, VA'}
					description={'Full stack app that allows anyone in Arlington county to search for basketball courts and create events to play with friends and other ballers in the area.'}
					stack={'React/Redux, Node/Express/MongoDb, Passport'}
					repo={'https://github.com/salihovdr/hoops-client'}
					deployed={'https://hoops-client.herokuapp.com/'} 
				/>
				<ProjectItem 
					title={'GO!'}
					img={'https://i.postimg.cc/PxzSk8cN/Screen-Shot-2018-10-12-at-2-21-06-PM.png'} 
					alt={'GO! -- app for locating and sharing your fav nature spots'}
					description={'Yelp for Parks is an app made to encourage people to go outside. The app makes it easy to explore your natural surroundings, allowing users to register and comment on locations. With Yelp for Parks, you can help raise community awareness about the beautiful locales right outside their front doors by adding your own locations.'}
					stack={'React/Redux, Node/Express/MongoDb'}
					repo={'https://github.com/thinkful-ei22/yelp-for-parks-server'}
					deployed={'https://dry-waters-99312.herokuapp.com/'} 
				/>
			</div>
		</div>
	);
}