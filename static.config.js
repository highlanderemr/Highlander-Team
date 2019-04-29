import axios from 'axios'
import { tabs } from './src/tabs';

export default {
  getSiteData: async () => {
    const { data } = await axios.get(
        'https://raw.githubusercontent.com/SnehiV/Highlander-Team/master/data.json'
    )
    return data;
  },
  getRoutes: () => {
    return tabs.map(tab => ({
      path: `/${tab}`
    }))
  },
  stagingSiteRoot: "https://localhost:3000",
  siteRoot: "highlanderemr.com"
}
