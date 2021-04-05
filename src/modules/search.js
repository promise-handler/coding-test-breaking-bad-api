import getAllEpisodes from './episodes'

const searchEpisodesByCharacters = (characters, episodes) => {
  if (characters && typeof characters === 'string') {
    return episodes.filter((episode) => episode.characters.includes(characters))
  }

  if (characters.length <= 0) return []
  return episodes.filter((episode) => {
    return characters.every((value) => episode.characters.includes(value))
  })
}

const mapSearchResults = (results) => {
  const mappedResults = results.map((result) => {
    const parseWithZero = (number) =>
      Number(number) <= 9 ? `0${number.trim()}` : number

    const { title, episode, season } = result
    const episodeNumber = parseWithZero(episode)
    const seasonNumber = parseWithZero(season)

    return `S${seasonNumber}${episodeNumber} - ${title}`
  })

  return mappedResults
}

const search = async (searchPhrase, episodes = []) => {
  const allEpisodes = episodes

  if (!searchPhrase) return

  if (episodes.length <= 0) {
    allEpisodes = await getAllEpisodes()
  }

  const searchResults = searchEpisodesByCharacters(searchPhrase, allEpisodes)
  const searchResultsMapped = mapSearchResults(searchResults)

  console.log(searchResultsMapped)

  return searchResultsMapped
}

export default search
