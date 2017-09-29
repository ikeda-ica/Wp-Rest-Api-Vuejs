import Vue from 'vue';
import axios from 'axios';

//var Vue = require('vue');
//var axios = require('axios');

var posts = [];

Vue.component('post-list', {
  props: ['post'],
  template: '<li></li>'
});

new Vue({
  el: '#root',
  data: {
    posts: posts
  },
  created: function() {
    let _this = this;
    // setting wp-rest-api url 
    axios.get('http://localhost:8888/wp-local/wordpress/wp-json/wp/v2/posts').then(function(response) {
      _this.posts = response.data;
      console.log(_this.posts);
    }).catch(function(error) {
      console.log(error);
    });
  }

});
