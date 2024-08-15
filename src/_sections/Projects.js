import Reveal from "@/_components/Reveal";
import Image from "next/image";
import kroskelImg from '../../public/pr-kroskel-banner.jpg';
import page28Img from '../../public/pr-page28-thumbnail.jpg';
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
                <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 text-violet-900 md:text-left text-center">Projets</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 justify-center gap-2 my-10">
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <div className="w-full md:h-60">
                                <Image src={page28Img} className="object-cover object-center rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Site web Page 28 sous forme de mockup" loading="lazy" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">PAGE 28</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">PHP</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">SASS</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Laravel Mix</span>
                            </section>
                            <p className="my-4">Les femmes à l'honneur dans un catalogue de films et séries dédié à leurs &oelig;uvres.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900 text-violet-900 hover:text-fuchsia-700 hover:border-b-fuchsia-700" onClick={() => setShowModal1(true)}>Voir plus</button>
                            {showModal1 &&
                                <Modal onClose={() => setShowModal1(false)}>
                                    <Page28 />
                                </Modal>
                            }
                        </article>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <div className="w-full md:h-60">
                                <Image src={webdocImg} className="object-cover object-center rounded-lg m-auto w-full h-full"
                                    width={1157}
                                    height={867}
                                    alt="Screenshot du webdoc que j'ai réalisé" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">MON PREMIER WEBDOC</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Next</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">React</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Three</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">TailWind</span>
                            </section>
                            <p className="my-4">Un portfolio sous forme de diapositives interactives, inspiré des webdocumentaires.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900 text-violet-900 hover:text-fuchsia-700 hover:border-b-fuchsia-700" onClick={() => setShowModal3(true)}>Voir plus</button>
                            {showModal3 &&
                                <Modal onClose={() => setShowModal3(false)}>
                                    <Webdoc />
                                </Modal>
                            }
                        </article>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <div className="w-full md:h-60 ">
                                <Image src={kroskelImg} className="object-cover object-top rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Bannière présentant la marque Kroskel" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">KROSKEL</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">PHP</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">SASS</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Laravel Mix</span>
                            </section>
                            <p className="my-4">Une boutique e-commerce pour la marque de vêtements Kroskel.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900 text-violet-900 hover:text-fuchsia-700 hover:border-b-fuchsia-700" onClick={() => setShowModal2(true)}>Voir plus</button>
                            {showModal2 &&
                                <Modal onClose={() => setShowModal2(false)}>
                                    <Kroskel />
                                </Modal>
                            }
                        </article>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <div className="w-full md:h-60 ">
                                <Image src={terreCitronImg} className="object-cover object-top rounded-lg m-auto w-full h-full"
                                    width={300}
                                    height={400}
                                    alt="Bannière présentant le site de l'atelier Terre Citron" placeholder="blur" />
                            </div>
                            <h3 className="text-3xl font-bold mt-8">TERRE CITRON</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Elementor</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Intégration</span>
                            </section>
                            <p className="my-4">Une boutique et un site vitrine pour donner de la visibilité à l'atelier Terre Citron.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900 text-violet-900 hover:text-fuchsia-700 hover:border-b-fuchsia-700" onClick={() => setShowModal4(true)}>Voir plus</button>
                            {showModal4 &&
                                <Modal onClose={() => setShowModal4(false)}>
                                    <TerreCitron />
                                </Modal>
                            }
                        </article>
                    </div>
                </Reveal>
            </div>

        </>
    )
}

export default Projects;