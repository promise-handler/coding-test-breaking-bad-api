let formValue = ''
const form = document.querySelector('.BreakingBad__form')

const hasComma = (value) => {
  return value.includes(',')
}

const createArrayFromString = (string) => {
  return string.split(',')
}

const handleForm = (event) => {
  event.preventDefault()
  const { value: inputValue } = form.elements['search-input']

  if (hasComma(inputValue)) {
    formValue = createArrayFromString(inputValue)
  } else {
    formValue = inputValue
  }
}

form.addEventListener('submit', handleForm)

// TODO: Handle API calls with a service method
// TODO: Transform data using the search phrase
// TODO: DOM manipulations
// TODO: Write documentation (README file)
