import React from 'react'
import CustomInput from './CustomInput'

const CustomForm = () => {

	return (
		<div>
			<h3>Custom Form</h3>
			<form>
				<CustomInput label="Name" />
				<CustomInput label="Email" />
				<CustomInput label="Password" type='password' />
				<CustomInput label="Confirm Password" type='password' />
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default CustomForm