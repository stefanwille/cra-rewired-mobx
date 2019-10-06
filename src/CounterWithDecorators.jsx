import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react-lite';

class Store {
	@observable counter = 0;

	@action
	increment() {
		this.counter++;
	}

	@computed
	get doubled() {
		return this.counter * 2;
	}
}

const store = new Store();

export const Counter = observer(() => {
	return (
		<div>
			{store.counter} - double: {store.doubled}
		</div>
	);
});

export const Button = () => {
	return (
		<button
			onClick={() => {
				store.counter += 1;
			}}
		>
			Increment
		</button>
	);
};
