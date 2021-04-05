import service from './index'

const EPISODES_URL = 'episodes'

describe('api service', () => {
  describe('when getting episodes', () => {
    it('should call api correctly', () => {
      global.get = jest.fn(() => {
        Promise.resolve()
      })

      service.getAllEpisodes().then(() => {
        expect(get).toHaveBeenCalledWith(EPISODES_URL)
      })
    })
  })
})
