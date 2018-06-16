Vue.component('sharedlink', {
    props: ['link'],
    template:
        `<li>
        <span> {{link.url}} </span>
        <span> {{ link.tags }} </span>
    </li>`
});

Vue.component('taginput', {
    props: ['tags', 'index'],
    template:
        `<li>
        <input v-model="tags[index]">
    </li>`
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            links: [
                { id: 0, url: 'www.yahoo.com', tags: ['yahoo'] },
                { id: 1, url: 'www.google.com', tags: [] },
                { id: 2, url: 'www.whatsapp.com', tags: [] }
            ],
            input: {
                url: '',
                tags: []
            },
            keyword: ''
        }
    },
    methods: {
        submitLink: function () {
            this.links.push({
                id: this.links.length,
                url: this.input.url,
                tags: this.input.tags
            })
        },
        addTag: function () {
            this.input.tags.push('');
        },
        clear: function () {
            this.input = {
                url: '',
                tags: []
            }
        }
    },
    computed: {
        filteredLinks: function() {
            const regKeyword = RegExp(this.keyword, 'g');

            return this.links.filter(link => {
                if (link.url.match(regKeyword) || link.tags.some(tag => tag.match(regKeyword))) {
                    return link;
                }
            });
        }
    }
})