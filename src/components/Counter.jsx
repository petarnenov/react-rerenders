import React from 'react'
import { useAppContext } from '../hooks/useAppContext';

const Counter = () => {
	const { store: { counter }, setStore } = useAppContext();

	return (
		<div>
			<h3>Counter</h3>
			<button onClick={() => setStore({ counter: counter + 1 })}>Increment</button>
			{counter}
		</div>
	)
}

export default Counter;
