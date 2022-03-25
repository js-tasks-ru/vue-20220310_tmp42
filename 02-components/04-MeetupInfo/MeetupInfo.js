import {defineComponent} from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
      default: '',
    },
    place: {
      type: String,
      required: true,
      default: '',
    },
    date: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  methods: {
    convertDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    convertDateLong(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg"/>
        {{organizer}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg"/>
        {{place}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg"/>
        <time :datetime="convertDateLong(date)">{{ convertDate(date) }}</time>
      </li>
    </ul>`,
});
