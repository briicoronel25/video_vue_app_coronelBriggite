var genreSelect = Vue.component('genre-select', {
    template: `
    <div class="col-6">
    <div class="form-group">
            <label for="category">Select category: </label> 
            <select v-model="selected" @change='filterGenre' name="category" class="form-control">
                <!--option selected>all</option-->
                <option :value='genre' v-text='genre' v-for="genre in genres">
                    
                </option>
            </select>
    </div>
    </div>`,
    props: ["genres"],
    data: function() {
        return {
            movies: [],
            selected: "",
            genre: "",
        };
    },
    methods: {
        filterGenre: function() {
            console.log("SELECTED VALUE: " + this.selected);
            this.genre = this.selected;
            axios.get("/api/movies/" + user_type).then(
                res => {
                    if (this.selected != "all")
                        movs = res.data.filter(movie => movie.genre === this.genre);
                    else
                        movs = res.data;
                    console.log(movs);
                    this.movies = movs;
                    this.$emit('filter', this.movies, this.selected);
                }
            ).catch(function(error) {
                console.log(error);
            });
        }
    }
})

const videosApp = {

    vm: new Vue({
        delimiters: ["${", "}"],
        el: "#videos",
        components: {
            'genre-select': genreSelect,
        },
        data: {
            genres: ["all"],
            movies: [],
            actual_genre: "all",
            actual_movie: '',
            dir: '',
        },
        mounted() {
            if (user_type == "adult")
                this.dir = "general";
            else
                this.dir = "kids";
            console.log("USSER TYPE =>", user_type);
            axios.get('/api/genres/' + user_type)
                .then(response => {
                    console.log(response);
                    var container = []
                    response.data.forEach(element => {
                        container.push(element.genre);
                    });
                    this.genres = container;
                    this.genres.push("all");
                })
                .catch(function(error) {
                    console.log(error);
                });
            axios.get("/api/movies/" + user_type).then(
                res => {
                    movs = res.data;
                    this.movies = movs;
                }
            ).catch(function(error) {
                console.log(error);
            });
        },

        methods: {
            reloadMovies: function(movies, genre) {
                console.log("EVENT RESULT:" + movies + genre);
                this.movies = movies;
                this.actual_genre = genre;
                console.log("MOVIES FROM INSTANCE:" + movies);
            },
            setMovie: function(e, target) {
                console.log("a whas clicked");
                var id = e.target.parentNode.getAttribute('href');
                this.actual_movie = this.movies.filter(mov => mov.id == id);
                this.actual_movie = this.actual_movie[0];
                console.log("actual movie: " + JSON.stringify(this.actual_movie));
            }
        },
    })
};