import React from 'react'
import {useAppContext} from '../hooks/useAppContext'

const CustomInput = ({label, type = "text"}) => {
	const {useStore, setState, getState} = useAppContext()
	const {value = ''} = useStore(state => state[label.toLowerCase()]) || {};
	const handleChange = e => setState({[label.toLowerCase()]: {value: e.target.value, isValid: true}})

	console.log("store: ", getState())

	return (
		<label>
			{label}:
			<input type={type} name={label.toLowerCase()} value={value} onChange={handleChange} />
		</label>
	)
}

export default CustomInput;
