import React, { Component } from 'react';
import Intro from './components/Intro';
import './reset.css';
import './simple-grid.css';
import './App.css';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

class App extends Component {
  
	render() {
		return (
			<div className="App container">
				<main className="App-main row">
					<section className='intro'>
						<Intro />
					</section>
					<section className='skills'>
						<Skills />
					</section>
					<section className='projects'>
						<Projects />
					</section>
				</main>
				<footer className="App-footer row">
					<Contacts />
				</footer>
			</div>
		);
	}
}

export default App;
