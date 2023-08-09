// Librairie
import classes from './FormInput.module.css';

// Composants
import Button from '../Button/Button';

function FormInput({ ...props }) {
	// Méthodes
	const renderInput = (props) => {
		let input;
		switch (props.type) {
			case 'textarea':
				input = (
					<textarea
						id={props.id}
						name={props.name}
						placeholder={props.placeholder}
						rows={4}
					></textarea>
				);
				break;
			case 'submit':
				input = (
					<Button
						label={props.name}
						target=""
						align="center"
						submit={true}
					/>
				);
				break;
			default:
				input = (
					<input
						type={props.type}
						id={props.id}
						name={props.name}
						placeholder={props.placeholder}
					/>
				);
		}
		return input;
	};

	return (
		<div className={classes.FormInput}>{renderInput(props)}</div>
	);
}

export default FormInput;
