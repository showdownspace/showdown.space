import DefaultTheme from 'vitepress/theme'
import SponsorList from './SponsorList.vue'
import SponsorDetails from './SponsorDetails.vue'
import UnderConstruction from './UnderConstruction.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('SponsorList', SponsorList)
    app.component('SponsorDetails', SponsorDetails)
    app.component('UnderConstruction', UnderConstruction)
  },
}
