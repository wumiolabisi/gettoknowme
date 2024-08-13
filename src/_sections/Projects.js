import Reveal from "@/_components/Reveal";
import Image from "next/image";
import kroskelImg from '../../public/pr-kroskel-home.jpg';
import page28Img from '../../public/pr-page28-home.jpg';
import Modal from "@/_components/Modal";
import { useState } from "react";
import Kroskel from "./projects/Kroskel";
import Page28 from "./projects/Page28";

const Projects = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <>
            <Reveal>
                <h2 className="uppercase text-5xl font-bold mb-2 text-violet-900 md:text-left text-center">Projets</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 justify-center gap-2 my-10">
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <Image src={page28Img} className="object-cover rounded-lg m-auto w-full"
                                width={200}
                                height={200}
                                alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" placeholder="blur" />
                            <h3 className="text-3xl font-bold mt-8">PAGE 28</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">PHP</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">SASS</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Laravel Mix</span>
                            </section>
                            <p className="my-4">Les femmes à l'honneur dans un catalogue de films et séries dédié à leurs &oelig;uvres.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900" onClick={() => setShowModal1(true)}>Voir plus</button>
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
                            <Image src={kroskelImg} className="object-cover rounded-lg m-auto w-full"
                                width={200}
                                height={200}
                                alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" placeholder="blur" />
                            <h3 className="text-3xl font-bold mt-8">Kroskel</h3>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">PHP</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">SASS</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Laravel Mix</span>
                            </section>
                            <p className="my-4">Une boutique e-commerce pour la marque de vêtements Kroskel.</p>
                            <button className="px-4 py-2 border-b-2 border-solid border-b-violet-900" onClick={() => setShowModal2(true)}>Voir plus</button>
                            {showModal2 &&
                                <Modal onClose={() => setShowModal2(false)}>
                                    <Kroskel />
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