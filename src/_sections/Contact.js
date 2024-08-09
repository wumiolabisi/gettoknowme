import Reveal from '@/_components/Reveal';
import Link from 'next/link';

const Contact = () => {

    return (
        <div className="text-center">
            <Reveal>
                <h2 className="uppercase md:text-6xl text-3xl font-bold mb-2 text-violet-900">Prenons contact</h2>
                <p className="text-center text-lg">Contactez-moi par e-mail pour en savoir plus sur mon profil et sur ce que j'apporterais à votre entreprise !</p>
                <Link className="uppercase my-2 font-bold" href="mailto:wumi.olabisi@gmail.com" title="Envoyer un email à Omowumi OLABISI" alt="Envoyer un email à Omowumi OLABISI">wumi.olabisi@gmail.com</Link>
            </Reveal>
        </div>
    )
}
export default Contact;