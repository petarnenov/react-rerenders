import React from 'react'
import CustomInput from './CustomInput'

const CustomForm = () => {

	return (
		<div>
			<h3>Custom Form</h3>
			<form
				onSubmit={e => {
					e.preventDefault();
					const formData = new FormData(e.target);
					const data = Object.fromEntries(formData.entries());
					console.log("form data: ", data);
				}}>
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