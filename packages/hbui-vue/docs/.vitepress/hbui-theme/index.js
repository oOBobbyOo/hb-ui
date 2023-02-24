import './styles/index.css'
import './custom-styles/index.scss'
import VPBadge from './components/VPBadge.vue'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
export { default as VPHomeHero } from './components/VPHomeHero.vue'
export { default as VPHomeFeatures } from './components/VPHomeFeatures.vue'
export { default as VPHomeSponsors } from './components/VPHomeSponsors.vue'
export { default as VPDocAsideSponsors } from './components/VPDocAsideSponsors.vue'
export { default as VPTeamPage } from './components/VPTeamPage.vue'
export { default as VPTeamPageTitle } from './components/VPTeamPageTitle.vue'
export { default as VPTeamPageSection } from './components/VPTeamPageSection.vue'
export { default as VPTeamMembers } from './components/VPTeamMembers.vue'
const theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.component('Badge', VPBadge)
  }
}
export default theme
