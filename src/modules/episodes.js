import services from '../services'

const getAllEpisodes = () => {
  return services.getAllEpisodes().then((response) => {
    return response.data
  })
}

export default getAllEpisodes
