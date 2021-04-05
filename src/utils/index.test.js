import { hasComma, createArrayFromString, parseValue } from './index'

const mockedValue = 'Test, Test'

describe('utils', () => {
  describe('hasComma function', () => {
    it('should return correct value', () => {
      const expectedResult = true

      expect(hasComma(mockedValue)).toEqual(expectedResult)
    })
  })

  describe('createArrayFromString', () => {
    it('should return correct value', () => {
      const expectedResult = ['Test', 'Test']

      expect(createArrayFromString(mockedValue)).toEqual(expectedResult)
    })
  })

  describe('createArrayFromString', () => {
    describe('if value has commas', () => {
      it('should return correct value', () => {
        const expectedResult = ['Test', 'Test']

        expect(parseValue(mockedValue)).toEqual(expectedResult)
      })
    })
    describe('if value has no comma', () => {
      it('should return correct value', () => {
        const mockedValue = 'Test'
        const expectedResult = 'Test'

        expect(parseValue(mockedValue)).toEqual(expectedResult)
      })
    })
  })
})
