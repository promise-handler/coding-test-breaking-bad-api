import formModule from './modules/form'
import searchModule from './modules/search'

formModule.form.addEventListener('submit', formModule.handleForm)

const search = searchModule.search

export default search

// TODO: Add tests
// TODO: Write documentation (README file)
