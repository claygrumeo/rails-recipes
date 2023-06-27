const addIngredientButton = document.getElementById('add_ingredient_button')
const ingredientsContainer = document.getElementById('ingredients_container')
let inputIncrement = 0

addIngredientButton.addEventListener('click', () => {
  const ingredientsInput = document.createElement('input')
  ingredientsContainer.insertAdjacentHTML('beforeend',
  `<div class="d-flex flex-row" id="radio_group_${inputIncrement}">
    <fieldset class="row mb-3">
      <div class="col-sm">
        <div class="form-check me-5">
          <input class="form-check-input" type="radio" name="gridRadios${inputIncrement}" id="gridRadios${inputIncrement}_Whole" checked>
          <label class="form-check-label" for="gridRadios1">
            Whole number
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios${inputIncrement}" id="gridRadios${inputIncrement}_Fractional">
          <label class="form-check-label" for="gridRadios2">
            Fractional number
          </label>
        </div>
      </div>
    </fieldset>
    <div id="gridRadios${inputIncrement}_FractionalInputs" style="display: none;">
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${inputIncrement}][numerator]" id="numerator" style="width: 45px;"></input>
      <span class="fs-4">/</span>
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${inputIncrement}][denominator]" id="denominator"></input>
    </div>
    <div id="gridRadios${inputIncrement}_WholeInputs">
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${inputIncrement}][whole]" id="whole"></input>
    </div>
  </div>`)
  const newWholeNumberRadioButton = document.getElementById(`gridRadios${inputIncrement}_Whole`)
  const newFractionalNumberRadioButton = document.getElementById(`gridRadios${inputIncrement}_Fractional`)
  newWholeNumberRadioButton.addEventListener('click', (event) => {
    handleRadioSelection(event)
  })
  newFractionalNumberRadioButton.addEventListener('click', (event) => {
    handleRadioSelection(event)
  })
  inputIncrement++
})

function handleRadioSelection(event) {
  let elementToShow = null
  let elementToHide = null
  const elementIDStem = event.srcElement.id.split('_')[0]
  console.log("ID", event.srcElement.id)
  if (event.srcElement.id.includes("Whole")) {
    elementToHide = document.getElementById(`${elementIDStem}_FractionalInputs`)
    elementToShow = document.getElementById(`${elementIDStem}_WholeInputs`)
  } else {
    elementToHide = document.getElementById(`${elementIDStem}_WholeInputs`)
    elementToShow = document.getElementById(`${elementIDStem}_FractionalInputs`)
  }
  elementToHide.style.display = 'none'
  elementToShow.style.display = 'block'
}