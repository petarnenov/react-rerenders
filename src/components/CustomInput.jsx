import React from 'react'
import { useAppContext } from '../hooks/useAppContext'

const CustomInput = ({ label, type = "text" }) => {
	const store = useAppContext()
	const { value = '' } = store.useStore(state => state[label.toLowerCase()]) || {};
	const handleChange = e => store.setState({ [label.toLowerCase()]: { value: e.target.value, isValid: true } })

	console.log("store: ", store.getState())

	return (
		<label>
			{label}:
			<input type={type} name="name" value={value} onChange={handleChange} />
		</label>
	)
}

export default CustomInput;
