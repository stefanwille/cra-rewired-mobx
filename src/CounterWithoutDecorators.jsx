import React from 'react';
import { decorate, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react-lite';

class Store {
	counter = 0;

	increment() {
		this.counter++;
	}

	get doubled() {
		return this.counter * 2;
	}
}

decorate(Store, {
	counter: observable,
	increment: action,
	doubled: computed,
});

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
				store.increment();
			}}
		>
			Increment
		</button>
	);
};
