// Librairie
import classes from './Contact.module.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import EMAILJS_IDS from '@/api/emailjs';

// Composant
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import Button from '@/components/global/Button/Button';
import Info from '@/components/global/Info/Info';

function Contact() {
	// State
	const [formSuccess, setFormSuccess] = useState(false);
	const [formError, setFormError] = useState(false);

	// Variables
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Methodes
	const formSubmittedHandler = async (datas) => {
		setFormSuccess(false);
		setFormError(false);

		try {
			const toSend = {
				from_name: datas.name,
				from_email: datas.email,
				message: datas.message,
			};
			const response = await emailjs
				.send(
					EMAILJS_IDS.SERVICE_ID,
					EMAILJS_IDS.TEMPLATE_ID,
					toSend,
					EMAILJS_IDS.USER_ID
				)
				.then((response) => response);

			if (response.status === 200) {
				setFormSuccess({
					message:
						"Merci de m'avoir contacté, je te répond le plus rapidement possible. À bientôt !",
				});
			} else {
				setFormError({
					message:
						'Désolé, une erreur est survenue... Je te conseilles de réessayer plus tard, ou de me contacter via un autre moyen, mes infos sont juste en dessous !',
				});
			}
		} catch (error) {
			setFormError({
				message:
					'Désolé, une erreur est survenue... Je te conseilles de réessayer plus tard, ou de me contacter via un autre moyen, mes infos sont juste en dessous !',
			});
		}
	};

	return (
		<section id="contact" className={classes.Contact}>
			<SectionTitle label="me contacter" shape="rectangle" />

			{errors.name || errors.email || errors.message ? (
				<Info
					label="Veuillez remplir tous les champs du formulaire."
					type="error"
				/>
			) : (
				''
			)}

			{formSuccess ? (
				<Info type="success" label={formSuccess.message} />
			) : (
				<form onSubmit={handleSubmit(formSubmittedHandler)}>
					<div className={classes.FormInput}>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="nom"
							pattern="^(?! *$)[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
							{...register('name', {
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
			)}
		</section>
	);
}

export default Contact;
