import Popdown from '@/_components/Popdown';
import Reveal from '@/_components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {

    return (
        <div className="text-center">
            <Reveal>
                <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2">Prenons contact</h2>
                <p className="text-center mt-8 mb-4 text-lg">Contactez-moi par e-mail pour en savoir plus sur mon profil !</p>
                <Link className="uppercase md:text-4xl text-2xl font-bold hover:text-green-300 transition-all duration-200" href="mailto:wumi.olabisi@gmail.com" title="Envoyer un email à Omowumi OLABISI" alt="Envoyer un email à Omowumi OLABISI">wumi.olabisi@gmail.com</Link>
            </Reveal>
            <Reveal>
                <ul className="flex flex-row justify-center items-center gap-4 my-10 md:mx-0 mx-4">
                    <li className="uppercase" >
                        <Popdown delay={0.1}>
                            <a href="https://github.com/wumiolabisi" target="_blank" title="Voir le profil github">
                                <Image src="/github.png" width="30" height="30" alt="Logo Github" loading="lazy" className="m-auto" />
                                <p className="text-xxs my-2 md:inline hidden hover:text-green-300 transition-all duration-200">Voir mon GitHub</p>
                            </a>
                        </Popdown>

                    </li>
                    <li className="uppercase" >
                        <Popdown delay={0.3}>
                            <a href="/CV-Omowumi-OLABISI-Developpeuse-Web.pdf" target="_blank" title="Voir le CV de Omowumi">
                                <Image src="/download.png" width="30" height="30" alt="CV de Omowumi OLABISI" loading="lazy" className="m-auto" />
                                <p className="text-xxs my-2 md:inline hidden hover:text-green-300 transition-all duration-200">Télécharger mon CV</p>
                            </a>
                        </Popdown>
                    </li>
                </ul>
            </Reveal>
        </div>
    )
}
export default Contact;