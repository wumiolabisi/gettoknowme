import Link from "next/link";
import Mockup from '../../../public/pr-terrecitron-mockup.png';
import Banner from '../../../public/pr-terrecitron-banner.jpg';
import Image from "next/image";

const TerreCitron = () => {
    return (
        <>
            <article>
                <div className="w-full md:h-60 ">
                    <Image src={Banner} className="object-cover object-center rounded-lg m-auto w-full h-full"
                        width={300}
                        height={400}
                        alt="Bannière présentant le site de l'atelier Terre Citron" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Création de la vitrine de l&apos;atelier Terre Citron</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">STACK</span> WordPress, PHP, Javascript, CSS, HTML</li>
                    <li className="my-4"><Link href="https://terrecitron.fr" target="_blank" title="Rendez-vous sur le site de Terre CITRON" alt="Cliquez ici pour accéder au site terrecitron.fr" className="text-xs font-bold rounded-full badge border-2 border-solid border-green-300 bg-green-300 text-gray-800 hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300">VOIR LE SITE EN LIGNE</Link></li>

                </ul>
                <p className="my-4">
                    J&apos;ai mis en place le site de l&apos;atelier de céramique Terre Citron. Après avoir initialement conçu une <strong>boutique en ligne</strong>,
                    nous avons simplifié le site pour réduire la maintenance, permettant à la gérante de se concentrer sur son art et son entreprise.

                </p>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8 font-thin'>
                    <li><strong>Maquettage du site</strong> : Réalisation des maquettes du site avec Photoshop et Canva, en respectant l&apos;identité visuelle de la marque.</li>
                    <li><strong>Intégration du design avec Elementor</strong> : Intégration des maquettes avec Elementor pour la conception des pages.</li>
                    <li><strong>Suivi des performances</strong> : Mise en place et utilisation de Google Analytics 4 (GA4) pour suivre et analyser les performances du site.</li>
                    <li><strong>Formation de la gérante</strong> : Formation complète de la gérante pour lui permettre de gérer le site en toute autonomie.</li>
                    <li><strong>Résolution de bugs</strong> : Identification et correction de bugs techniques sur le site.</li>
                </ul>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </div>

            </article>
        </>
    )
}

export default TerreCitron;