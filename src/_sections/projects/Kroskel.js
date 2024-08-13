import Link from "next/link";
import kroskelImg from '../../../public/pr-kroskel-home.jpg';
import Catalogue from '../../../public/pr-kroskel-catalogue.jpg';
import Image from "next/image";

const Kroskel = () => {
    return (
        <><h3 className="text-xl font-bold my-4">Conception, développement et maintenance de la boutique Kroskel</h3>
            <article>
                <Image src={kroskelImg} className="object-cover rounded-lg m-auto w-full mb-4"
                    width={200}
                    height={200}
                    alt="Image de la page d'accueil du site Kroskel" loading="lazy" placeholder="blur" />
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">ADRESSE</span> <Link href="https://kroskel.com" title="Rendez-vous sur la boutique Kroskel" alt="Cliquez ici pour accéder au site kroskel.fr">kroskel.com</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">STACK</span>WordPress, PHP, Javascript, HTML5/CSS3</li>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">ETAT DU PROJET</span> En ligne</li>
                </ul>
                <p className="my-4">
                    Kroskel est une marque de vêtements franco-camerounaise créé en 2015 par Ornella Djoukui.
                    Pour améliorer la visibilité de sa marque en ligne, elle m'a confié la conception et la mise en place de sa
                    boutique en ligne et du blog. L'un des plus grands défis de ce projet a été le délai court pour livrer la solution.
                </p>
                <div className="relative my-16" >
                    <Image src={Catalogue} className="object-cover" width="100%" height="500" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </div>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8'>
                    <li>Mise en place du site de A à Z : de la conception à la mise en place du thème avec Elementor et CSS/JS/HTML</li>
                    <li>Maintenance de la boutique : corrections des bugs, installations et mises à jour des plugins</li>
                    <li>SEO : Mise en place d'une stratégie SEO pour chaque page produit</li>
                    <li>Autres compétences mise en oeuvre durant cette expérience : intégration d'emails et suivi de campagne avec The Newsletter Plugin, montages vidéo pour la stratégie de communication</li>
                </ul>
            </article>
        </>
    )
}

export default Kroskel;