import Link from "next/link";
import Banner from '../../../public/pr-page28-thumbnail.png';
import Mockup from '../../../public/pr-page28-mockup.png';
import Image from "next/image";

const Page28 = () => {
    return (
        <>
            <article>
                <div className="w-full md:h-60">
                    <Image src={Banner} className="object-cover object-top rounded-lg m-auto w-full h-full"
                        width={1237}
                        height={761}
                        alt="Site web Page 28 sous forme de mockup" loading="lazy" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Conception et développement du catalogue de films et séries PAGE 28</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">STACK</span> <span className="text-sm">WordPress, PHP, SASS, Javascript, JQuery</span></li>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">CODE SOURCE</span> <Link href="https://github.com/wumiolabisi/page28-wp-theme" target="_blank" title="Rendez-vous sur le site Page28" alt="Cliquez ici pour accéder au site page28.fr" className="hover:text-green-400 transition-all duration-200 text-sm">https://github.com/wumiolabisi/page28-wp-theme</Link></li>
                    <li className="my-4"><Link href="https://page28.fr" target="_blank" title="Rendez-vous sur le site Page28" alt="Cliquez ici pour accéder au site page28.fr" className="text-xs font-bold rounded-full badge border-2 border-solid border-green-300 bg-green-300 text-gray-800 hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300">VOIR LE SITE EN LIGNE</Link></li>
                </ul>
                <p className="my-4 font-thin">
                    Page28 est un <strong>catalogue cinématographique numérique engagé</strong> qui souhaite mettre en avant le travail des
                    femmes du cinéma. Imaginé par la réalisatrice Anne ROUX, ce projet a débuté durant l&apos;été 2023.
                    Je continue de travailler activement sur ce projet, et le contenu du catalogue est en cours de mise à jour.
                </p>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8 font-thin'>
                    <li><strong>Gestion du projet avec JIRA :</strong> Suivi des étapes de développement et réunions hebdomadaires pour assurer la progression.</li>
                    <li><strong>Conception <em>Mobile first</em> :</strong> Conception d&apos;interfaces adaptées à tous les écrans.</li>
                    <li><strong>Personnalisation des templates PHP :</strong> Création de templates PHP pour personnaliser la mise en page en accord avec les maquettes.</li>
                    <li><strong>Optimisation des performances :</strong> Utilisation de Laravel Mix pour minimiser les fichiers et SASS pour éviter la redondance CSS.</li>
                    <li><strong>SEO et accessibilité :</strong> Mise en place de bonnes pratiques pour les contenus textuels et images : contraste de couleurs, hiérarchie des contenus, balises alt, etc.</li>
                    <li><strong>Optimisation des images :</strong> Respect des meilleures pratiques avec des images de moins de 100Ko, format JPG ou WebP privilégiés.</li>
                    <li><strong>Système de filtrage dynamique :</strong> Implémentation d&apos;AJAX pour le filtrage des films sans rechargement de page.</li>
                    <li><strong>Documentation interne :</strong> Création d&apos;un fichier de suivi détaillant la nomenclature des classes CSS et autres conventions de développement pour assurer la cohérence du projet.</li>
                </ul>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page du catalogue du site Page28.fr" loading="lazy" placeholder="blur" />
                </div>


            </article>

        </>
    )
}

export default Page28;