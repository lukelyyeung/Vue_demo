Vue.component('sharedlink', {
    props: ['link'],
    template: '<li>{{link.url}}</li>'
})

const app = new Vue({
    el: '#app',
    data: {
        links: [
            { id: 0, url: 'www.yahoo.com' },
            { id: 1, url: 'www.google.com' },
            { id: 2, url: 'www.whatsapp.com' }
        ],
        inputLink: ''
    },
    methods: {
        submitLink: function () {
        },
        clear: function() {
            this.inputLink = ''
        }
    }
})