import Link from "next/link";
import Banner from '../../../public/pr-page28-banner.jpg';
import Mockup from '../../../public/pr-page28-mockup.jpg';
import Image from "next/image";

const Page28 = () => {
    return (
        <><h3 className="text-xl font-bold my-4">Conception et développement du catalogue de films PAGE 28</h3>
            <article>
                <Image src={Banner} className="mb-10 object-cover rounded-lg m-auto w-full"
                    width="100%" height="500"
                    alt="Image de la page d'accueil du site Page28.fr" loading="lazy" placeholder="blur" />
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">ADRESSE</span> <Link href="https://page28.fr" title="Rendez-vous sur le site Page28" alt="Cliquez ici pour accéder au site page28.fr" className="hover:text-fuchsia-700">page28.fr</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">STACK</span> WordPress, PHP, Javascript, SASS</li>
                    <li><span className="badge rounded-full bg-violet-900 text-white text-sm">CODE SOURCE</span> https://github.com/wumiolabisi/page28-wp-theme</li>
                </ul>
                <p className="my-4">
                    Page28 est un catalogue engagé de films et séries qui souhaite mettre en avant le travail des
                    femmes du cinéma. Imaginé par la réalisatrice Anne ROUX, ce projet a débuté durant l'été 2023.
                    Je continue de travailler activement sur ce projet, et le contenu du catalogue est en cours de mise à jour.
                </p>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page du catalogue du site Page28.fr" loading="lazy" placeholder="blur" />
                </div>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8'>
                    <li>Conception des maquettes avec Photoshop et Penpot</li>
                    <li>Développement du thème sur mesure avec PHP, SASS et HTML</li>
                    <li>Laravel Mix pour optimiser les fichiers js et css</li>
                    <li>Mise en place d'un système de filtrage avec AJAX</li>
                </ul>

            </article>

        </>
    )
}

export default Page28;