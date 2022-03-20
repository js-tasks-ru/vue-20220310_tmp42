import {createApp} from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
}).mount('#app');
