import Link from "next/link";
import Mockup from '../../../public/pr-webdoc-mockup.png';
import Banner from '../../../public/pr-webdoc-banner.png';
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
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">CODE SOURCE</span> <Link href="https://github.com/wumiolabisi/portfolio-webdoc" target="_blank" title="Rendez-vous sur mon compte Github pour voir le code source" alt="Cliquez ici pour accéder au site code source" className="hover:text-green-400 transition-all duration-200 text-sm">github.com/wumiolabisi/portfolio-webdoc</Link></li>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">STACK</span> NextJS, ReactJS, ThreeJS, TailWindCSS</li>
                    <li className="my-4"><Link href="https://github.com/wumiolabisi/portfolio-webdoc" target="_blank" title="Rendez-vous sur mon compte Github pour voir le code source" alt="Cliquez ici pour accéder au site code source" className="text-xs font-bold rounded-full badge border-2 border-solid border-green-300 bg-green-300 text-gray-800 hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300">VOIR LE CODE SOURCE</Link></li>
                </ul>
                <p className="my-4 font-thin">
                    Le webdocumentaire est un médium qui fait appel à de nombreux métiers créatifs et techniques. C&apos;est cette diversité de compétences qui me fascine !
                    Ainsi, j&apos;ai réalisé un <strong>portfolio interactif</strong> sous forme de diapositives navigables à l&apos;aide des flèches du clavier.
                    La première partie de ce projet raconte ma rencontre pour le web. La seconde étape de cette expérience est une immersion dans
                    un espace infini en 3D, dans lequel on peut découvrir les compétences et projets que j&apos;ai mené au fil des ans.
                </p>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8 font-thin'>
                    <li><strong>Navigation intuitive :</strong> Après des essais avec le scroll, j&apos;ai finalement implémenté une navigation basée sur les touches du clavier, offrant une expérience fluide rappelant une série de diapositives.</li>
                    <li><strong>Exploration et apprentissage :</strong> J&apos;ai approfondi mes connaissances en Framer Motion en étudiant la documentation officielle et divers tutoriels pour maîtriser les animations et les transitions.</li>
                    <li><strong>Compatibilité multi-navigateurs :</strong> Consciente des limitations de certaines fonctionnalités JS sur différents navigateurs, j&apos;ai mis en place des solutions de secours, comme des images par défaut pour remplacer les vidéos non supportées.</li>
                    <li><strong>Intégration 3D immersive :</strong> Le système de particules dans la section Compétences a été conçu avec Three.js.</li>
                    <li><strong>Sélection d&apos;outils adaptés :</strong> J&apos;ai utilisé React et Next.js pour structurer le projet afin d&apos;avoir une architecture solide et facilement maintenable.</li>
                    <li><strong>Expérience utilisateur immersive :</strong> Chaque section du webdoc a été conçue pour offrir une immersion totale, alliant vidéo, son, et interaction 3D, le tout en respectant les bonnes pratiques du développement web.</li>
                </ul>
                <div className="relative my-10" >
                    <Image src={Mockup} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du webdoc" loading="lazy" placeholder="blur" />
                </div>

            </article>
        </>
    )
}

export default Webdoc;