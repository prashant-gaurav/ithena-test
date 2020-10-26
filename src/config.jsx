const ss = window.sessionStorage.getItem('ithana-session');
const sessionData = JSON.parse(ss);
module.exports = {
    baseUrl: 'http://localhost:4001/v1',
    sessionKey: 'ithana-session',
    appName: 'Ithana.io',
    copyright: '© 2020 www.ithana.com',
    sessionUser: ss && {
        name: ss && sessionData['userName'],
        email: ss && sessionData['userEmail'],
        token: ss && sessionData['token'],
    },
    authHeaders: {
        'Content-Type': 'application/json',
        token: ss && sessionData['token'],
    },
    clientHeaders: {
        'Content-Type': 'application/json',
    },
    authFileHeaders: {
        // 'Content-Type':'multipart/form-data',
        token: ss && sessionData['token'],
    },
    socialLinks: {
        FacBook: 'https://www.facebook.com/prashant.gaurav.357',
        instagram: 'https://www.prashant.work/',
        linkedin: 'https://www.linkedin.com/in/prashant-gaurav/',
        twitter: 'https://www.prashant.work/',
        whatsapp: '+91 9430021839'
    }
}
