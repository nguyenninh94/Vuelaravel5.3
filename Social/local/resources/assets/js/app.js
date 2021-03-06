
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('friend', require('./components/Friend.vue'));
Vue.component('init', require('./components/Init.vue'));
Vue.component('feed', require('./components/Feed.vue'));
Vue.component('unread', require('./components/UnreadNots.vue'));
Vue.component('post', require('./components/Posts.vue'));
Vue.component('search', require('./components/Search.vue'));
Vue.component('notification', require('./components/Notification.vue'));

import { store } from './store'

const app = new Vue({
    el: '#app',
    store
});
