import React from 'react'
import { useAppContext } from '../hooks/useAppContext';

const ColorPicker = () => {
	const store  = useAppContext()
	const color = store.useStore(state => state.color) || '#fff'

	return (
		<div>
			<h2>ColorPicker</h2>
			<input
				type="color"
				id="color-picker"
				onChange={e => store.setState({ color: e.target.value })}
				value={color}
			/>
			<p>color {color}</p>
		</div>
	)
}

export default ColorPicker;
