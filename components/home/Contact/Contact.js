// Librairie
import classes from './Contact.module.css';
import { useForm } from 'react-hook-form';

// Composant
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import Button from '@/components/global/Button/Button';

function Contact() {
	// Variables
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Methodes
	const formSubmittedHandler = (datas) => {
		console.log(datas);
	};

	return (
		<section id="contact" className={classes.Contact}>
			<SectionTitle label="me contacter" shape="rectangle" />
			<form onSubmit={handleSubmit(formSubmittedHandler)}>
				<div className={classes.FormInput}>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="nom"
						pattern="^(?! *$)[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
						{...register('nom', {
							required: true,
						})}
					/>
				</div>
				<div className={classes.FormInput}>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="ton.courriel@mail.com"
						pattern="^(?! *$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div className={classes.FormInput}>
					<textarea
						id="message"
						name="message"
						placeholder="message"
						pattern="(?! *$).+"
						rows={5}
						{...register('message', {
							required: true,
						})}
					></textarea>
				</div>
				<div className={classes.FormInput}>
					<Button
						label="envoyer"
						submit={true}
						target=""
						align="center"
					/>
				</div>
			</form>

			{/* <form onSubmit={console.log('check')}>
				<FormInput
					type="text"
					id="name"
					name="name"
					placeholder="nom"
					pattern="^(?! *$)[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
				/>
				<FormInput
					type="email"
					id="email"
					name="email"
					placeholder="ton.courriel@email.com"
					pattern="^(?! *$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
				/>
				<FormInput
					type="textarea"
					id="message"
					name="message"
					placeholder="message"
					pattern="(?! *$).+"
				/>
				<FormInput type="submit" name="envoyer" />
			</form> */}
		</section>
	);
}

export default Contact;
