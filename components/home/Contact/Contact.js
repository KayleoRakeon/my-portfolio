// Librairie
import classes from './Contact.module.css';

// Composant
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import FormInput from '@/components/global/FormInput/FormInput';

function Contact() {
	return (
		<section id="contact" className={classes.Contact}>
			<SectionTitle label="me contacter" shape="rectangle" />
			<form onSubmit={console.log('check')}>
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
			</form>
		</section>
	);
}

export default Contact;
