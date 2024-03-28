declare const require: any;

export const environment = {
    production: false,
    appVersion: require('../../package.json').version,

    SOCKET_URL: '',
    API_URL: 'https://hrmsdev.azurewebsites.net/',
};