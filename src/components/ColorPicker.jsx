import React from 'react'
import { useAppContext } from '../hooks/useAppContext';

const ColorPicker = () => {
	const { store: { color }, setStore } = useAppContext();

	return (
		<div>
			<h2>ColorPicker</h2>
			<input
				type="color"
				id="color-picker"
				onChange={e => setStore({ color: e.target.value })}
				value={color}
			/>
			<p>{color}</p>
		</div>
	)
}

export default ColorPicker;
