import api from './api'

const EPISODES_URL = 'episodes'

const getAllEpisodes = () => {
  return api.get(EPISODES_URL)
}

export default {
  getAllEpisodes,
}
