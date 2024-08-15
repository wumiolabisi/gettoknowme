import Reveal from "@/_components/Reveal";

const Experiences = () => {
    return (
        <>
            <Reveal>
                <h2 className="uppercase text-5xl font-bold mb-2 text-violet-900 md:text-left text-center">Expériences pro</h2>
            </Reveal>
            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-violet-300">
                    <h3 className="text-xl text-fuchsia-700"><strong>Webmaster</strong> chez Solocal Marketing Services</h3>
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
                    <h3 className="text-xl text-fuchsia-700"><strong>Développeuse FullStack WordPress</strong> chez Kroskel</h3>
                    <p className="text-violet-900 text-xl">2 ans (2021-2023)</p>
                    <p className="mt-4">J'ai mis en place la boutique en ligne de la marque Kroskel de A à Z.
                        Accompagnée par la petite équipe de la maison, je suis intervenue sur toutes les étapes de mise en place du site :
                        conception, maquettage, développement, maintenance. Ayant développée de nombreuses compétences transverses grâce à mes
                        projets personnels, j'ai également été chargée de créer du contenu pour les stratégies de communication : retouches photo,
                        montage vidéos, newsletters responsives, etc.

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