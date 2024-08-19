import Link from "next/link";
import Mockup from '../../../public/pr-terrecitron-mockup.jpg';
import Banner from '../../../public/pr-terrecitron-home3.jpg';
import Image from "next/image";

const TerreCitron = () => {
    return (
        <>
            <article>
                <div className="w-full md:h-60 ">
                    <Image src={Banner} className="object-cover object-top rounded-lg m-auto w-full h-full"
                        width={300}
                        height={400}
                        alt="Bannière présentant le site de l'atelier Terre Citron" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Création de la vitrine de l&apos;atelier Terre Citron</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">ADRESSE</span> <Link href="https://terrecitron.fr" title="Rendez-vous sur le site de l'atelier" alt="Cliquez ici pour accéder au site terre citron" className="hover:text-fuchsia-700">terrecitron.fr</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">STACK</span> WordPress, Elementor, Intégration</li>
                </ul>
                <p className="my-4">
                    J&apos;ai mis en place le site de l&apos;atelier de céramique Terre Citron. Après avoir initialement conçu une <strong>boutique en ligne</strong>,
                    nous avons simplifié le site pour réduire la maintenance, permettant à la gérante de se concentrer sur son art et son entreprise.

                </p>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </div>

            </article>
        </>
    )
}

export default TerreCitron;