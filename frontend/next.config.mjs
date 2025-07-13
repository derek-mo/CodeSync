/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { isServer }) => {
    // if (!isServer) {
    //     config.resolve.fallback = {
    //     ...config.resolve.fallback,
    //     fs: false,
    //     path: false,
    //     os: false,
    //     };
        
    //     // Fix Monaco Editor dynamic imports
    //     config.module.rules.push({
    //     test: /\.worker\.js$/,
    //     use: {
    //         loader: 'worker-loader',
    //         options: {
    //         name: 'static/[hash].worker.js',
    //         publicPath: '/_next/',
    //         },
    //     },
    //     });
    // }
    // return config;
    // },
    // // This helps with ESM modules
    // experimental: {
    // esmExternals: 'loose'
    // }
};

export default nextConfig;
