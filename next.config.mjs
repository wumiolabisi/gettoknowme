/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev, isServer }) {
        // Si on est en mode développement (dev) et que ce n'est pas côté serveur (isServer),
        // on utilise 'inline-source-map' pour générer les sourcemaps.
        if (dev && !isServer) {
            config.devtool = 'inline-source-map';
        }
        return config;
    },
};

export default nextConfig;
