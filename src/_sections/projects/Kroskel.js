import Link from "next/link";
import Mockup1 from '../../../public/pr-kroskel-mockup.jpg';
import Mockup2 from '../../../public/pr-kroskel-mockup2.jpg';
import Banner from '../../../public/pr-kroskel-banner.jpg';
import Image from "next/image";

const Kroskel = () => {
    return (
        <>
            <article>

                <div className="w-full md:h-96">
                    <Image src={Banner} className="object-cover object-top rounded-lg m-auto w-full h-full"
                        width={300}
                        height={400}
                        alt="Bannière présentant la marque Kroskel" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Conception, développement et maintenance de la boutique Kroskel</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">ADRESSE</span> <Link href="https://kroskel.com" title="Rendez-vous sur la boutique Kroskel" alt="Cliquez ici pour accéder au site kroskel.fr" className="hover:text-fuchsia-700">kroskel.com</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">STACK</span> WordPress, PHP, Javascript, HTML5/CSS3</li>
                </ul>
                <p className="my-4">
                    Kroskel est une marque de vêtements franco-camerounaise créé en 2015 par Ornella Djoukui.
                    Pour améliorer la visibilité en ligne, elle m&apos;a confié la conception et la mise en place de sa
                    <strong>boutique en ligne et d&apos;un blog</strong>.
                    L&apos;un des plus grands défis durant cette expérience était de respecter les délais courts de livraison.
                </p>
                <div className="relative my-10" >
                    <Image src={Mockup1} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </div>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8'>
                    <li>Mise en place du site de A à Z : de la conception à la mise en place du thème avec <strong>Elementor et HTML5/CSS3/JS</strong></li>
                    <li>Maintenance de la boutique : corrections des bugs, installations et mises à jour des plugins</li>
                    <li>SEO : Mise en place d&apos;une stratégie SEO pour chaque page produit + mise en place d&apos;un blog</li>
                    <li>Autres compétences mise en oeuvre durant cette expérience : <strong>intégration d&apos;emails</strong> et suivi de campagne avec The Newsletter Plugin, montages vidéo pour la stratégie de communication</li>
                </ul>

                <section className="flex flex-row gap-4 justify-center my-10 flex-wrap">
                    <Image src={Mockup2} className="object-cover rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </section>
            </article>
        </>
    )
}

export default Kroskel;