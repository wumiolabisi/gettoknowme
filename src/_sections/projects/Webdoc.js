import Link from "next/link";
import Mockup from '../../../public/pr-webdoc-mockup.jpg';
import Banner from '../../../public/pr-webdoc-banner.jpg';
import Image from "next/image";

const Webdoc = () => {
    return (
        <>
            <article>
                <div className="w-full md:h-96">
                    <Image src={Banner} className="object-cover object-bottom rounded-lg m-auto w-full h-full"
                        width={1157}
                        height={867}
                        alt="Screenshot du webdoc que j'ai réalisé" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Réalisation d&apos;un portfolio sous forme de diapositives interactives</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">CODE SOURCE</span> <Link href="https://github.com/wumiolabisi/portfolio-webdoc" target="_blank" title="Rendez-vous sur mon compte Github pour voir le code source" alt="Cliquez ici pour accéder au site code source" className="hover:text-fuchsia-700">github.com/wumiolabisi/portfolio-webdoc</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-gray-500 text-white text-sm">STACK</span> NextJS, ReactJS, ThreeJS, TailWindCSS</li>
                </ul>
                <p className="my-4">
                    Le webdocumentaire est un médium qui fait appel à de nombreux métiers créatifs et techniques. C&apos;est cette diversité de compétences qui me fascine !
                    Ainsi, j&apos;ai réalisé un <strong>portfolio interactif</strong> sous forme de diapositives navigables à l&apos;aide des flèches du clavier.
                    La première partie de ce projet offre une introduction à ma passion pour le webLa seconde étape de cette expérience est une immersion dans
                    un espace infini en 3D, dans lequel on peut découvrir les compétences et projets que j&apos;ai mené au fil des ans.
                </p>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du webdoc" loading="lazy" placeholder="blur" />
                </div>

            </article>
        </>
    )
}

export default Webdoc;