import React from 'react'
import {useAppContext} from '../hooks/useAppContext';

const ColorPicker = () => {
	const {useStore, setState} = useAppContext()
	const color = useStore(state => state.color) || '#fff'

	return (
		<div>
			<h3>ColorPicker</h3>
			<input
				type="color"
				id="color-picker"
				onChange={e => setState({color: e.target.value})}
				value={color}
			/>
			<p>color {color}</p>
		</div>
	)
}

export default ColorPicker;
