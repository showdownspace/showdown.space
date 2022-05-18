import DefaultTheme from 'vitepress/theme'
import SponsorList from './SponsorList.vue'
import SponsorDetails from './SponsorDetails.vue'
import UnderConstruction from './UnderConstruction.vue'
import MyLayout from './MyLayout.vue'
import RankingTable from './RankingTable.vue'
import ParticipantsTable from './ParticipantsTable.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('SponsorList', SponsorList)
    app.component('SponsorDetails', SponsorDetails)
    app.component('UnderConstruction', UnderConstruction)
    app.component('RankingTable', RankingTable)
    app.component('ParticipantsTable', ParticipantsTable)
  },
}
