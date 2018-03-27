new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            { path: "", component: HomePage },
            { path: "/:language/:document/:fragment?", component: DocumentPage },
        ]
    }),
    components: {
        "main-page": MainPage,
        "markdown-reader": MarkdownReader,
    }
});