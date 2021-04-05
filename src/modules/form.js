import { parseValue } from '../utils'
import getAllEpisodes from './episodes'
import search from './search'

const form = document.querySelector('.BreakingBad__form')
const list = document.querySelector('.BreakingBad__list')

const displayListItems = (results) => {
  list.innerHTML = ''

  results.forEach((result) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(result))
    list.appendChild(li)
  })
}

const handleForm = async (event) => {
  event.preventDefault()
  const episodes = await getAllEpisodes()
  const { value } = form.elements['search-input']
  const formValue = parseValue(value)

  const  searchResultsMapped  = await search(formValue, episodes)

  displayListItems(searchResultsMapped)
}

export default {
  form,
  handleForm
}
