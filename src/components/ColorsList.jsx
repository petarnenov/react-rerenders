import React, {use} from 'react'

//fake async function
const getColors = () => new Promise(resolve => {
	setTimeout(() => {
		const colors = new Array(10000).fill("").map((color, index) => (index % 16).toString(16))
		resolve(colors)
	}, 5000)
})

//stable async fns results
const asyncFns = new Map()
const registerAsyncFunc = (fn, key) => {
	if (!asyncFns.has(key)) {
		asyncFns.set(key, fn())
	}
	return asyncFns.get(key)
}

const ColorsList = () => {
	const colors = use(registerAsyncFunc(getColors, "colors"))

	return (
		<div>
			<h3>Colors List({colors.length})</h3>
			<ul>
				{colors.map((color, index) => {
					const c = `#${color}${color}${color}`;
					return <li key={index} style={{backgroundColor: c, padding: "4px"}}></li>
				})}
			</ul>
		</div>
	)
}

export default React.memo(ColorsList)
