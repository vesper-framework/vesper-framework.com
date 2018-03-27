const MainPage = {
    template: `<div>
    <div v-if="language">
        <div class="container" id="app">
            <nav class="navbar navbar-expand navbar-light bg-light">
                <!--<img src="image/logo-large.png" width="10%" height="10%">-->
                <a class="navbar-brand" href="#">Vesper</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto" style="width: 100%; justify-content: flex-end;">
                            <!--<li class="nav-item">
                                <a class="nav-link" href="https://medium.com/vesper" title="Blog">
                                    <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#107C10">
                                        <title id="simpleicons-github-icon">Blog</title>
                                        <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/>
                                    </svg>
                                </a>
                            </li>-->
                            <!--<<li class="nav-item">
                                <a class="nav-link" href="https://twitter.com/VesperFramework" title="Twitter">
                                    <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#1DA1F2">
                                        <title id="simpleicons-github-icon">Twitter</title>
                                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                                    </svg>
                                </a>
                            </li>-->
                            <li class="nav-item">
                                <a class="nav-link" href="https://gitter.im/vesper-framework/vesper" title="Gitter">
                                    <svg aria-labelledby="simpleicons-gitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF0064">
                                        <title id="simpleicons-gitter-icon">Gitter</title>
                                        <path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com/vesper-framework/vesper" title="GitHub">
                                    <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#181717">
                                        <title id="simpleicons-github-icon">GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    <!--<form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>-->
                </div>
            </nav>
            <div class="row">
                <div class="col-12 col-sm-5 col-md-3 left-panel">
                    <ul>
                        <li v-for="link in links">
                            <div v-if="link.links">
                                <div @click="goToLink()">
                                    <router-link :to="'/' + language + '/' + link.links[0].url">{{ link.name }}</router-link> 
                                </div>
                                <ul>
                                    <li v-for="subLink in link.links" @click="goToLink()">
                                        <router-link :to="'/' + language + '/' + subLink.url">{{ subLink.name }}</router-link>
                                    </li>
                                </ul>           
                            </div>
                            <div v-else>
                                <div @click="goToLink()">          
                                    <router-link :to="'/' + language + '/' + link.url">{{ link.name }}</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-sm-7 col-md-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <router-view></router-view>
    </div>
</div>
`,
    data: function() {
        return {
            language: this.$route.params.language,
            links: Links
        };
    },
    watch: {
        '$route': function(to, from) {
            this.language = to.params.language;
        }
    },
    methods: {
        goToLink: function() {
            window.scrollTo(0,0);
        }
    }
};