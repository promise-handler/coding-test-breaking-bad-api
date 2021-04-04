let formValue = "";
const form = document.querySelector('.BreakingBad__form');

const handleForm = (event) => {
  event.preventDefault();
  const input = form.elements['search-input'];

  formValue = input.value;
}

form.addEventListener('submit', handleForm);

// TODO: Transform data depending on the type (String, Array)
// TODO: Handle API calls with a service method
// TODO: Transform data using the search phrase
// TODO: DOM manipulations
// TODO: Write documentation (README file)
