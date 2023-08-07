/* Setup all the routes that need to be routed through the proxy */
// baseURl in environment.ts is moved here. 
// In essence http://localhost:4200/conferenceapi will route to https://www.tsdugout.in/conference-api 
// Same with the other routes configured below. Please add any missing or future endpoints to the "context" array below

const PROXY_CONFIG = [
    {
        context: [
            '/api',
            '/listings'
        ],
        target: 'https://www.tsdugout.in',
        secure: true,
        logLevel: 'debug',
        changeOrigin: true,
        ws: true,
        xfwd: true
    },
];

module.exports = PROXY_CONFIG;
