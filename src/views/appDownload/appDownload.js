import {Vue, $, Common} from 'js/base'
import Header from '../../common/components/header.vue'
import appDownload from './appDownload.vue'
var homeVue = new Vue({
  el: '#appDownload',
  template: '<div class="pageview"><common-header></common-header><app-download></app-download></div>',
  components: {
    'common-header': Header,
    'app-download': appDownload
  }
})
