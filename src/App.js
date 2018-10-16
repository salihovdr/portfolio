import React, { Component } from 'react';
import Intro from './components/Intro';
import './reset.css';
import './simple-grid.css';
import './App.css';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

class App extends Component {
  
	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
					<Navbar />
				</header> */}
				<main className="App-main">
					<section className='intro'>
						<Intro />
					</section>
					<section className='projects'>
						<Projects />
					</section>
				</main>
				<footer className="App-footer">
					<Contacts />
				</footer>
			</div>
		);
	}
}

export default App;
