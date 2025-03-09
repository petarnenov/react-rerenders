import React from 'react'

const ColorsList = () => {
	const colors = new Array(10000).fill("").map((color, index) => (index % 16).toString(16))

	return (
		<div>
			<h3>ColorsList</h3>
			<ul>
				{colors.map((color, index) => {
					const c = `#${color}${color}${color}`;
					return <li key={index} style={{ backgroundColor: c, padding: "4px" }}></li>
				})}
			</ul>
		</div>
	)
}

export default ColorsList

