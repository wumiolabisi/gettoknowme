import Link from "next/link";

const Page28 = () => {
    return (
        <><h3 className="text-xl font-bold my-4">Conception et développement du catalogue de films PAGE 28</h3>
            <article>
                <ul>
                    <li><span className="badge rounded-full bg-violet-900 text-white text-sm">ADRESSE</span> <Link href="https://page28.fr" title="Rendez-vous sur le site Page28" alt="Cliquez ici pour accéder au site page28.fr">page28.fr</Link></li>
                    <li><span className="badge rounded-full bg-violet-900 text-white text-sm">STACK</span> WordPress, PHP, Javascript, SASS</li>
                    <li><span className="badge rounded-full bg-violet-900 text-white text-sm">ETAT DU PROJET</span> En ligne</li>
                    <li><span className="badge rounded-full bg-violet-900 text-white text-sm">CODE SOURCE</span> https://github.com/wumiolabisi/page28-wp-theme</li>
                </ul>
                <p className="my-4">
                    Page28 est un catalogue engagé de films et séries qui souhaite mettre en avant le travail des
                    femmes du cinéma. Imaginé par la réalisatrice Anne ROUX, ce projet a débuté durant l'été 2023.
                    Je continue de travailler activement sur ce projet, et le contenu du catalogue est en cours de mise à jour.
                </p>
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