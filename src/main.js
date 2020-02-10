import  Vue from 'vue';
import css from './style.css';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: "#app",
  data: {
    genre: [],
    time: [],
    movies: []
  },
  methods: {
    checkFilter(cat,title,checked){
      if(checked){
        this[cat].push(title);
      } else {
        let index  = this[cat].indexOf(title);
        if(index > -1){
          this[cat].splice(index, 1);
        }
      }
    }
  },
  components:{
    MovieList,
    MovieFilter
  },
  created(){
    this.$http.get('/api').then(response => {
      this.movies = response.data;
    });
  }
});