module.exports = {
    purge: {
        mode: 'all',
        content: [
            './public/index.html',
            './src/**/*.html',
            './src/**/*.svelte',
            './src/**/*.css',
            './src/**/*.js',
        ],
        options: {
            whitelist: []
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
