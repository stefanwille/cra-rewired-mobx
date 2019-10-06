import React from 'react';
import './App.css';

import * as CounterWithDecorators from './CounterWithDecorators.jsx';
import * as CounterWithoutDecorators from './CounterWithoutDecorators.jsx';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<CounterWithDecorators.Counter />
				<CounterWithDecorators.Button />

				<CounterWithoutDecorators.Counter />
				<CounterWithoutDecorators.Button />
			</header>
		</div>
	);
}

export default App;
