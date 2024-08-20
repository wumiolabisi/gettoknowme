import Reveal from "@/_components/Reveal";

const Experiences = () => {
    return (
        <>
            <Reveal>
                <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 md:text-left text-center">Expériences pro</h2>
            </Reveal>
            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-gray-700">
                    <h3 className="text-xl"><strong>Webmaster</strong> chez Solocal Marketing Services</h3>
                    <p className="text-green-300 text-lg">1 an (2023-2024) - Angoulême</p>
                    <p className="mt-4">J&apos;ai mené à terme plus de <strong>30 sites vitrines et e-commerce</strong>. Du brief client à la livraison de la solution finale,
                        mon rôle était de m&apos;assurer que les client·es aient un site personnalisé et optimisé afin d&apos;améliorer leur visibilité.
                    </p>
                    <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Intégration</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">DUDA</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Optimisation SEO</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Accessiblité RGAA</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Relation client</span>
                    </section>
                </article>
            </Reveal>

            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-gray-700">
                    <h3 className="text-xl"><strong>Développeuse Full Stack WordPress</strong> chez Kroskel</h3>
                    <p className="text-green-300 text-lg">2 ans (2021-2023) - 100% télétravail</p>
                    <p className="mt-4">J&apos;ai pris en main la conception et la réalisation de la boutique e-commerce et du blog.
                        Mon rôle était de créer une solution e-commerce fiable rapidement afin d&apos;améliorer la visibilité et le ROI de la marque.
                        Après sa mise en place, j&apos;ai optimisé la boutique et le blog en améliorant les performances de chargement et la sémantique SEO.
                        J&apos;étais également responsable de la maintenance et effectuait donc toutes les corrections techniques pour garantir une disponibilité sans faille de la boutique.
                    </p>
                    <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">WordPress</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">PHP</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">HTML</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">CSS</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Javascript</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">SEO</span>
                    </section>
                </article>
            </Reveal>
            <Reveal>
                <article className="my-10 pb-10 border-b-2 border-solid border-b-gray-700">
                    <h3 className="text-xl"><strong>Développeuse Emailing</strong> chez Numberly</h3>
                    <p className="text-green-300 text-lg">2 ans (2016-2019) - Paris, Dubaï</p>
                    <p className="mt-4">Chez Numberly, j&apos;ai acquis trois ans d&apos;expérience en tant que développeuse emailing,
                        dont deux en alternance.
                        J&apos;ai développé des campagnes d&apos;emailing personnalisées en utilisant HTML et CSS.
                        Mon rôle a impliqué la création de templates responsives et l&apos;optimisation des taux de délivrabilité et d&apos;engagement.
                        J&apos;ai collaboré directement avec les équipes marketing pour assurer que chaque campagne soit conforme aux exigences de nos clients.</p>
                    <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">HTML5</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">CSS inline</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Délivrabilité</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Responsiveness</span>
                        <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">RGPD</span>
                    </section>
                </article>
            </Reveal>
        </>
    )
}

export default Experiences;