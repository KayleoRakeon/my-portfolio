// Librairie
import classes from './Contact.module.css';

// Composant
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import FormInput from '@/components/global/FormInput/FormInput';

function Contact() {
	return (
		<section id="contact">
			<SectionTitle label="me contacter" shape="rectangle" />
			<article>
				<form onSubmit={console.log('check')}>
					<FormInput
						type="text"
						id="name"
						name="name"
						placeholder="nom"
					/>
					<FormInput
						type="email"
						id="email"
						name="email"
						placeholder="ton.courriel@email.com"
					/>
					<FormInput
						type="textarea"
						id="message"
						name="message"
						placeholder="message"
					/>
					<FormInput type="submit" name="envoyer" />
				</form>
			</article>
		</section>
	);
}

export default Contact;
