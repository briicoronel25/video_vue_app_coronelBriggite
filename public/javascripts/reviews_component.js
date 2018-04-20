Vue.component('review-stars', {
    template: `<div class="star-rating">
          <label class="star-rating-star" v-for="rating in ratings"
          :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
          v-on:click="updateValue(rating)" v-on:mouseover="updateValue(rating)" v-on:mouseout="updateValue(rating)">
          <input class="star-rating star-rating-checkbox" type="radio" :value="rating"
          v-model="value" :disabled="disabled">
            ★
          </label>
          </div>`,

    props: ['value', 'disabled'],

    data: function() {
        return {
            ratings: [1, 2, 3, 4, 5]
        };
    },

    methods: {
        updateValue: function(value) {
            if (!this.disabled) {
                this.$emit('input', value);
            }
        }
    }
});

const reviewApp = {

    vm: new Vue({
        delimiters: ["${", "}"],
        el: "#reviews",
        data: {
            reviews: [],
            dir: '',
            username: "",
            numStars: 0,
            review: "",
        },
        mounted() {
            if (user_type == "adult")
                this.dir = "general";
            else
                this.dir = "kids";
            var split = location.href.split("/");
            var id = split[split.length - 1];
            console.log(id);
            axios.get("/api/reviews/" + id)
                .then(
                    res => {
                        console.log(res);
                        this.reviews = res.data;
                    }
                )
                .catch();
        },
        methods: {
            addReview: function(e) {
                e.preventDefault();
                let movieId = document.querySelector('#id_hidden').textContent;
                axios.post("/api/reviews/", {
                        movieId: parseInt(movieId),
                        username: this.username,
                        numStars: this.numStars,
                        review: this.review
                    })
                    .then(res => {
                        this.reviews.push({
                            username: this.username,
                            comment: this.review,
                            review: this.numStars,
                            date: `${ new Date() }`
                        });

                        this.review = "";
                        this.username = "";
                        this.numStars = 0;
                    })
                    .catch(error => {
                        console.log(error);
                    });


            }
        }
    }),
}