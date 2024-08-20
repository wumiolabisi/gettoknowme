import Link from "next/link";
import Mockup1 from '../../../public/pr-kroskel-mockup.png';
import Mockup2 from '../../../public/pr-kroskel-mockup2.png';
import Banner from '../../../public/pr-kroskel-banner.jpg';
import Image from "next/image";

const Kroskel = () => {
    return (
        <>
            <article>

                <div className="w-full md:h-96">
                    <Image src={Banner} className="object-cover object-top rounded-lg m-auto w-full h-full"
                        width={300}
                        height={400}
                        alt="Bannière présentant la marque Kroskel" placeholder="blur" />
                </div>
                <h3 className="text-xl font-bold my-4">Conception, développement et maintenance de la boutique Kroskel</h3>
                <ul>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">STACK</span> WordPress, PHP, Javascript, CSS, HTML, SEO</li>
                    <li className="mb-2"><span className="badge rounded-full bg-zinc-700 text-green-300 text-xs font-bold">OUTILS</span> Ubersuggest, HotJar, Google Analytics (Universal, 4), Search Console </li>
                    <li className="my-4"><Link href="https://kroskel.com" target="_blank" title="Rendez-vous sur le site Kroskel" alt="Cliquez ici pour accéder au site kroskel.com" className="text-xs font-bold rounded-full badge border-2 border-solid border-green-300 bg-green-300 text-gray-800 hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300">VOIR LE SITE EN LIGNE</Link></li>

                </ul>
                <p className="my-4 font-thin">
                    Kroskel est une marque de vêtements franco-camerounaise créé en 2015 par Ornella Djoukui.
                    Pour améliorer la visibilité en ligne, elle m&apos;a confié la conception et la mise en place de sa
                    <strong>boutique en ligne et d&apos;un blog</strong>. C&apos;est l&apos;une des expériences professionnelles qui a le plus stimulé ma créativité et m&apos;a véritablement mis au défi.
                </p>
                <h3 className="font-bold">Points clés de ce projet</h3>
                <ul className='list-disc ps-8 font-thin'>
                    <li><strong>Développement sur mesure avec WordPress :</strong> Création d&apos;un thème personnalisé en utilisant PHP et Elementor, avec des personnalisations supplémentaires via JavaScript, CSS3, et HTML5 pour répondre aux besoins spécifiques de la marque.</li>
                    <li><strong>Optimisation des performances :</strong> Utilisation de GTMetrix et de Google PageSpeed Insights pour analyser et améliorer le chargement des pages, incluant l&apos;optimisation des images, des styles CSS, et la gestion du cache avec le plugin W3 Total Cache.</li>
                    <li><strong>SEO et sémantique :</strong> Mise en place d&apos;une hiérarchisation sémantique optimisée pour le SEO, en particulier dans un environnement Elementor, en veillant à ce que la structure du contenu respecte les meilleures pratiques.</li>
                    <li><strong>Déploiement rapide d&apos;une solution e-commerce :</strong> Conception et intégration rapide d&apos;une boutique en ligne avec WooCommerce pour répondre aux besoins de l&apos;événement Business Africa 2021, incluant l&apos;installation et la configuration des plugins e-commerce essentiels.</li>
                    <li><strong>Gestion de projet et coordination d&apos;équipe :</strong> Organisation de réunions hebdomadaires avec création d&apos;ordres du jour et comptes rendus. Suivi de l&apos;avancement des tâches, en assurant la coordination entre les différentes parties prenantes, notamment la Directrice Artistique et la fondatrice de la marque.</li>
                    <li><strong>Formation et autonomie de l&apos;équipe :</strong> Création de tutoriels PDF pour former l&apos;équipe à l&apos;utilisation de la boutique WooCommerce.</li>
                    <li><strong>Analyse et optimisation SEO :</strong> Recherche et intégration de mots-clés pertinents pour les pages produits et les pages statiques à l&apos;aide d&apos;Ubersuggest et de Google Search Console, avec un suivi régulier des performances SEO via des rapports mensuels et hebdomadaires.</li>
                    <li><strong>Mise en place d&apos;une stratégie de contenu :</strong> Développement du blog WordPress pour augmenter le trafic du site, couplé à la mise en place de formulaires pour la collecte d&apos;avis clients et la gestion des retours d&apos;expérience.</li>
                    <li><strong>Création de newsletters responsives :</strong> Développement de newsletters en HTML5 avec CSS-inline via le plugin THE Newsletter, et tests de délivrabilité pour assurer une communication efficace avec les abonnés.</li>
                    <li><strong>Suivi et maintenance continue :</strong> Utilisation de JIRA pour le suivi des tâches et la gestion des bugs, assurant la disponibilité continue de la boutique et du blog, tout en travaillant à distance avec l&apos;équipe via visioconférence et messagerie.</li>
                    <li><strong>Résolution de bugs :</strong> Intervention rapide pour identifier et corriger les bugs liés à la boutique en ligne, garantissant une expérience utilisateur fluide et sans interruption.</li>
                    <li><strong>Améliorations continues :</strong> Implémentation de nouvelles fonctionnalités et améliorations pour optimiser l&apos;expérience utilisateur et la performance du site, en fonction des retours utilisateurs et des analyses techniques.</li>
                    <li><strong>Surveillance de la performance du site :</strong> Mise en place de systèmes de surveillance pour suivre les performances du site en temps réel et anticiper les problèmes potentiels.</li>
                </ul>
                <div className="relative my-10" >
                    <Image src={Mockup1} className="object-cover mb-2 rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />
                    <Image src={Mockup2} className="object-cover rounded-lg" width="100%" height="auto" alt="Image de la page d'accueil du site kroskel.com" loading="lazy" placeholder="blur" />

                </div>



            </article>
        </>
    )
}

export default Kroskel;