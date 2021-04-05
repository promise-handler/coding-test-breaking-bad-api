import getAllEpisodes from './episodes'

import {
  default as search,
  searchEpisodesByCharacters,
  mapSearchResults,
} from './search'

const mockedEpisodes = [
  {
    season: '1',
    episode: '1',
    title: 'abc',
    characters: ['test1', 'test2'],
  },
  {
    season: '2',
    episode: '11',
    title: 'def',
    characters: ['test1', 'test3'],
  },
]

describe('search', () => {
  describe('searchEpisodesByCharacters method', () => {
    describe('if characters argument is string', () => {
      it('should filter episodes by string', () => {
        expect(searchEpisodesByCharacters('test1', mockedEpisodes)).toEqual(
          mockedEpisodes
        )
        expect(searchEpisodesByCharacters('test3', mockedEpisodes)).toEqual([
          mockedEpisodes[1],
        ])
      })
    })

    describe('if no episodes provided', () => {
      it('should assign empty array', () => {
        expect(search('test1')).toEqual(search('test1', []))
      })
    })

    describe('if characters argument is array', () => {
      describe('if characters array is empty', () => {
        it('should return empty array', () => {
          expect(searchEpisodesByCharacters([], mockedEpisodes)).toEqual([])
        })
      })
      describe('if characters array is not empty', () => {
        it('should return values correctly', () => {
          expect(searchEpisodesByCharacters(['test1'], mockedEpisodes)).toEqual(
            mockedEpisodes
          )
          expect(
            searchEpisodesByCharacters(['test1', 'test2'], mockedEpisodes)
          ).toEqual([mockedEpisodes[0]])
        })
      })
    })
  })

  describe('mapSearchResults method', () => {
    it('should return values correctly', () => {
      const expectedResult = ['S0101 - abc', 'S0211 - def']

      expect(mapSearchResults(mockedEpisodes)).toEqual(expectedResult)
    })
  })

  describe('search method', () => {
    describe('if no search phrase', () => {
      it('should stop the funtion execution', () => {
        const expectedResult = ['S0101 - abc', 'S0211 - def']

        return search('', mockedEpisodes).then((result) => {
          expect(result).not.toBe(expectedResult)
        })
      })
    })

    describe('if no episodes', () => {
      it('should call correct function', () => {
        search('test1', []).then(() => {
          expect(getAllEpisodes).toHaveBeenCalled()
        })
      })
    })

    it('should returns correct data', () => {
      const expectedResult = ['S0101 - abc', 'S0211 - def']

      return search('test1', mockedEpisodes).then((result) => {
        expect(result).toEqual(expectedResult)
      })
    })
  })
})
