import Reveal from "@/_components/Reveal";
import Image from "next/image";
import kroskelImg from '../../public/pr-kroskel-banner.jpg';
import page28Img from '../../public/pr-page28-thumbnail.png';
import webdocImg from '../../public/pr-webdoc-banner.jpg';
import terreCitronImg from '../../public/pr-terrecitron-banner.jpg';
import Modal from "@/_components/Modal";
import { useState } from "react";
import Kroskel from "./projects/Kroskel";
import Page28 from "./projects/Page28";
import Webdoc from "./projects/Webdoc";
import TerreCitron from "./projects/TerreCitron";

const Projects = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    return (
        <>
            <Reveal>
                <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 md:text-left text-center">Projets</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 justify-center gap-2 my-10">
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg box-shadow-custom">
                        <article className="cursor-pointer" onClick={() => setShowModal1(true)}>
                            <div className="w-full md:h-60">
                                <Image src={page28Img} className="object-cover object-top rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Site web Page 28 sous forme de mockup" loading="lazy" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">PAGE 28</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">WordPress</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">PHP</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">SASS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Javascript</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">JQuery</span>
                            </section>
                            <p className="my-4 font-thin">Les femmes à l&apos;honneur dans un catalogue de films et séries dédié à leurs &oelig;uvres.</p>
                            <ul className='list-disc ps-8 font-thin'>
                                <li>Suivi des étapes de développement et réunions hebdomadaires pour assurer la progression.</li>
                                <li>Conception d'interfaces adaptées à tous les écrans.</li>
                                <li>Utilisation de Laravel Mix pour minimiser les fichiers et SASS pour éviter la redondance CSS.</li>
                                <li>Implémentation d'AJAX pour le filtrage des films sans rechargement de page.</li>
                            </ul>
                        </article>
                        {showModal1 &&
                            <Modal onClose={() => setShowModal1(false)}>
                                <Page28 />
                            </Modal>
                        }
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg box-shadow-custom">
                        <article className="cursor-pointer" onClick={() => setShowModal3(true)}>
                            <div className="w-full md:h-60">
                                <Image src={webdocImg} className="object-cover object-center rounded-lg m-auto w-full h-full"
                                    width={1157}
                                    height={867}
                                    alt="Screenshot du webdoc que j'ai réalisé" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">MON PREMIER WEBDOC</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">NextJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">ReactJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">ThreeJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">TailWindCSS</span>
                            </section>
                            <p className="my-4 font-thin">Un portfolio sous forme de diapositives interactives, inspiré des webdocumentaires.</p>
                            <ul className='list-disc ps-8 font-thin'>
                                <li>Développement d'un système de navigation utilisant les événements de clavier.</li>
                                <li>Intégration de vidéos et de pistes audio synchronisées avec des animations 3D.</li>
                                <li>Création d'un système de particules avec Three.js.</li>
                                <li>Structuration du projet avec React et Next.js pour la gestion du routage et du rendu côté serveur.</li>
                            </ul>
                        </article>
                        {showModal3 &&
                            <Modal onClose={() => setShowModal3(false)}>
                                <Webdoc />
                            </Modal>
                        }
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg box-shadow-custom">
                        <article className="cursor-pointer" onClick={() => setShowModal2(true)}>
                            <div className="w-full md:h-60 ">
                                <Image src={kroskelImg} className="object-cover object-top rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Bannière présentant la marque Kroskel" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">KROSKEL</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">WordPress</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">PHP</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Javascript</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">JQuery</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">CSS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">HTML</span>
                            </section>
                            <p className="my-4">Une boutique e-commerce pour la marque de vêtements Kroskel.</p>

                        </article>
                        {showModal2 &&
                            <Modal onClose={() => setShowModal2(false)}>
                                <Kroskel />
                            </Modal>
                        }
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg box-shadow-custom">
                        <article className="cursor-pointer" onClick={() => setShowModal4(true)}>
                            <div className="w-full md:h-60 ">
                                <Image src={terreCitronImg} className="object-cover object-top rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Bannière présentant le site de l'atelier Terre Citron" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">TERRE CITRON</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">WordPress</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">PHP</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Javascript</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">CSS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">HTML</span>
                            </section>
                            <p className="my-4">Une boutique et un site vitrine pour donner de la visibilité à l&apos;atelier Terre Citron.</p>
                        </article>
                        {showModal4 &&
                            <Modal onClose={() => setShowModal4(false)}>
                                <TerreCitron />
                            </Modal>
                        }
                    </div>
                </Reveal>
            </div>

        </>
    )
}

export default Projects;