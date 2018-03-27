const DocumentPage = {
    template: `
<div :class="cssClasses">
    <markdown-reader :file="readUrl" :fragment="fragment"></markdown-reader>
    
    <div class="contribute small">
        Found a typo and want to contribute to the documentation? <a :href="editUrl">Edit this page on Github!</a>
    </div>
</div>
`,
    data: function() {
        return {
            language: this.$route.params.language,
            document: this.$route.params.document,
            fragment: this.$route.params.fragment,
            cssClasses: ["document", this.$route.params.language]
        };
    },
    watch: {
        '$route': function(to, from) {
            this.language = to.params.language;
            this.document = to.params.document;
            this.fragment = to.params.fragment;
            this.cssClasses = ["document", this.language];
            this.updateTitle();
        }
    },
    create: function() {
        this.updateTitle();
    },
    methods: {
        updateTitle: function() {
            const link = Links.find(link => link.url === this.document);
            if (link) {
                window.document.title = link.name + " | Vesper";
            }
        }
    },
    components: {
        "markdown-reader": MarkdownReader,
    },
    computed: {
        readUrl: function () {
            if (this.document === "changelog") {
                return `https://raw.githubusercontent.com/vesper-framework/vesper/master/CHANGELOG.md`;

            } else if (!this.document || this.document === "readme") {
                return `https://raw.githubusercontent.com/vesper-framework/vesper/master/README.md`;

            } else {
                return `https://raw.githubusercontent.com/vesper-framework/vesper/master/docs/${this.language}/${this.document}.md`;
            }
        },
        editUrl: function () {
            if (this.document === "changelog") {
                return `https://github.com/vesper-framework/vesper/edit/master/CHANGELOG.md`;

            } else if (!this.document) {
                return `https://github.com/vesper-framework/vesper/edit/master/README.md`;

            } else {
                return `https://github.com/vesper-framework/vesper/edit/master/docs/${this.language}/${this.document}.md`;
            }
        }
    }
};