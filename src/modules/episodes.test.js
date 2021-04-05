import getAllEpisodes from './episodes'
import services from '../services'

describe('episodes module', () => {
  it('should call service correctly', () => {
    const servicesSpy = jest.spyOn(services, 'getAllEpisodes')

    return getAllEpisodes().then(() => {
      expect(servicesSpy).toHaveBeenCalled()
    })
  })
})
