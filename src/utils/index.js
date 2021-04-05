const hasComma = (value) => {
  return value.includes(',')
}

const createArrayFromString = (string) => {
  const array = string.split(',')
  return array.map(item => item.trim())
}

export const parseValue = (value) => {
  if (hasComma(value)) {
    return createArrayFromString(value)
  }
  return value
}
