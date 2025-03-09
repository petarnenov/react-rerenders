import React from 'react'
import {useAppContext} from '../hooks/useAppContext'

const Counter = () => {
	const {useStore, setState} = useAppContext()
	const counter = useStore(state => state.counter) || 0;
	
	return (
		<div>
			<h3>Counter</h3>
			<button onClick={() => setState({counter: counter + 1})}>Increment <span>{counter}</span></button>
		</div>
	)
}

export default Counter;
