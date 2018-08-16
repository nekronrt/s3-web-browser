import swal from 'sweetalert';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

let authToken = JSON.parse(localStorage.getItem('mapaResearchReduxState'));

if (authToken && authToken.login && authToken.login.token) {
    window.axios.defaults.headers.common['token'] = authToken.login.token;
}

window.qs = require('qs');