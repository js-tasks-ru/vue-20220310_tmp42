import {createApp} from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      countLeft: 0,
      countRight: 0,
      operator: '',
    };
  },
  computed: {
    sum() {
      if (this.operator === 'sum')
        return this.countLeft + this.countRight;
      else if (this.operator === 'subtract')
        return this.countLeft - this.countRight;
      else if (this.operator === 'multiply')
        return this.countLeft * this.countRight;
      else if (this.operator === 'divide')
        return this.countLeft / this.countRight;
    },
  },
}).mount('#app');
