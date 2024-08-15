import Link from "next/link";
import Mockup from '../../../public/pr-webdoc-mockup.jpg';
import Banner from '../../../public/pr-webdoc-banner.jpg';
import Image from "next/image";

const Webdoc = () => {
    return (
        <><h3 className="text-xl font-bold my-4">Réalisation d'un portfolio sous forme de diapositives interactives</h3>
            <article>
                <Image src={Banner} className="object-cover rounded-lg m-auto w-full mb-10"
                    width={200} height={150}
                    alt="Image de la page d'accueil du Webdoc" loading="lazy" placeholder="blur" />
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">CODE SOURCE</span> <Link href="https://github.com/wumiolabisi/portfolio-webdoc" title="Rendez-vous sur mon compte Github pour voir le code source" alt="Cliquez ici pour accéder au site code source" className="hover:text-fuchsia-700">github.com/wumiolabisi/portfolio-webdoc</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-violet-900 text-white text-sm">STACK</span> NextJS, ReactJS, ThreeJS, TailWindCSS</li>
                </ul>
                <p className="my-4">
                    Le webdocumentaire est un médium qui fait appel à de nombreux métiers créatifs et techniques. C'est cette diversité de compétences qui me fascine !
                    Ainsi, j'ai conçu un portfolio interactif sous forme de diapositives navigables à l'aide des flèches du clavier.
                    La première partie de ce projet offre une introduction à ma passion pour le webLa seconde étape de cette expérience est une immersion dans
                    un espace infini en 3D, dans lequel on peut découvrir les compétences et projets que j'ai mené au fil des ans.
                </p>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                </div>

            </article>
        </>
    )
}

export default Webdoc;