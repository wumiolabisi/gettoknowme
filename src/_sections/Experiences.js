import Reveal from "@/_components/Reveal";
import Image from "next/image";
import profilPic from '../../public/Omowumi_OLABISI_photo.jpeg';

const Experiences = () => {
    return (
        <>
            <Reveal>
                <h2 className="uppercase text-5xl font-bold mb-2 text-violet-900 md:text-left text-center">Projets</h2>
            </Reveal>
            <div className="flex md:flex-row flex-col justify-center gap-2 my-10">
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <Image src={profilPic} className="object-cover rounded-lg m-auto w-full"
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
                        </article>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="shadow-lg p-4 rounded-lg">
                        <article>
                            <Image src={profilPic} className="object-cover rounded-lg m-auto w-full"
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
                            <p className="my-4">Les femmes à l'honneur dans un catalogue de films et séries dédié à leurs &oelig;uvres</p>
                        </article>
                    </div>
                </Reveal>
            </div>
            <Reveal>
                <h2 className="uppercase text-5xl font-bold mb-2 text-violet-900 md:text-left text-center">Expériences pro</h2>
            </Reveal>
            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-violet-300">
                    <h3 className="text-xl"><strong>Webmaster</strong> chez Solocal Marketing Services</h3>
                    <p className="text-violet-900 text-xl">1 an (2023-2024)</p>
                    <p className="mt-4">J'ai mené à terme plus de 30 projets de créations de sites vitrines et e-commerce. Du brief client à la livraison de la solution finale,
                        mon rôle était de m'assurer que les client·es aient un site personnalisé et optimisé afin d'améliorer leur visibilité.
                    </p>
                    <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Intégration</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">DUDA</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Optimisation SEO</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Accessiblité RGAA</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Relation client</span>
                    </section>
                </article>
            </Reveal>

            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-violet-300">
                    <h3 className="text-xl"><strong>Développeuse FullStack WordPress</strong> chez Kroskel</h3>
                    <p className="text-violet-900 text-xl">2 ans (2021-2023)</p>
                    <p className="mt-4">J'ai mis en place la boutique en ligne de la marque Kroskel de A à Z.
                        Accompagnée par une petite équipe passionnée de mode, je suis intervenue sur toutes les étapes :
                        conception, maquettage, développement, maintenance. Ayant développée de nombreuses compétences transverses grâce à mes
                        projets personnels, j'ai également été chargée de créer du contenu pour les startégie de communication : retouches photo,
                        montage vidéos, newsletters responsives...

                    </p>
                    <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">WooCommerce</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">HTML5/CSS3/JS</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">PHP</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Optimisation SEO</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Maintenance</span>
                        <span className="badge rounded-full bg-violet-900 text-white text-sm">Création de contenus</span>
                    </section>
                </article>
            </Reveal>
        </>
    )
}

export default Experiences;