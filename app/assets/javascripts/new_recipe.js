const addIngredientButton = document.getElementById('add_ingredient_button')
const ingredientsContainer = document.getElementById('ingredients_container')
let inputIncrement = 0

addIngredientButton.addEventListener('click', () => {
  const ingredientsInput = document.createElement('input')
  const uniqueID = inputIncrement
  ingredientsContainer.insertAdjacentHTML('beforeend',
  `<div class="d-flex flex-row" id="radio_group_${uniqueID}">
    <div class="row mb-3">
      <div class="col-sm">
        <div class="form-check me-5">
          <input class="form-check-input" type="radio" name="gridRadios${uniqueID}" id="gridRadios${uniqueID}_Whole" checked>
          <label class="form-check-label" for="gridRadios${uniqueID}_Whole">
            Whole number
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios${uniqueID}" id="gridRadios${uniqueID}_Fractional">
          <label class="form-check-label" for="gridRadios${uniqueID}_Fractional">
            Fractional number
          </label>
        </div>
      </div>
    </div>
    <div class="me-5" id="gridRadios${uniqueID}_FractionalInputs" style="display: none;">
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${uniqueID}][numerator]" id="ingredient${uniqueID}Numerator" style="width: 45px;"></input>
      <span class="fs-4">/</span>
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${uniqueID}][denominator]" id="ingredient${uniqueID}Denominator"></input>
    </div>
    <div class="me-5" id="gridRadios${uniqueID}_WholeInputs">
      <input type="number" class="h-50" name="recipe[ingredients_attributes][${uniqueID}][whole]" id="ingredient${uniqueID}Whole"></input>
    </div>
    <div class="me-5" id="gridRadios${uniqueID}_UnitSelection">
      <select class="form-select" aria-label="Unit of Measure" name="recipe[ingredients_attributes][${uniqueID}][unit]">
        <optgroup label="Volume">
          <option value="tsp." selected>tsp.</option>
          <option value="tbsp.">tbsp.</option>
          <option value="fl oz">fl oz</option>
          <option value="cup">cup</option>
          <option value="pint">pint</option>
          <option value="quart">quart</option>
          <option value="gallon">gallon</option>
          <option value="mL">mL</option>
          <option value="L">L</option>
          <option value="dL">dL</option>
        </optgroup>
        <optgroup label="Weight">
          <option value="pound">pound</option>
          <option value="ounce">ounce</option>
          <option value="mg">mg</option>
          <option value="kg">kg</option>
        </optgroup>
      </select>
    </div>
    <input class="h-50" type="text" id="gridRadios${uniqueID}_Item" name="recipe[ingredients_attributes][${uniqueID}][item]"
  </div>`)
  const newWholeNumberRadioButton = document.getElementById(`gridRadios${uniqueID}_Whole`)
  const newFractionalNumberRadioButton = document.getElementById(`gridRadios${uniqueID}_Fractional`)
  newWholeNumberRadioButton.addEventListener('click', (event) => {
    handleRadioSelection(event, uniqueID)
  })
  newFractionalNumberRadioButton.addEventListener('click', (event) => {
    handleRadioSelection(event, uniqueID)
  })
  inputIncrement++
})

function handleRadioSelection(event, num) {
  let elementToShow = null
  let elementToHide = null
  const inputsToClear = []
  const elementIDStem = event.srcElement.id.split('_')[0]

  if (event.srcElement.id.includes("Whole")) {
    elementToHide = document.getElementById(`${elementIDStem}_FractionalInputs`)
    elementToShow = document.getElementById(`${elementIDStem}_WholeInputs`)
    const numeratorInput = document.getElementById(`ingredient${num}Numerator`)
    const denominatorInput = document.getElementById(`ingredient${num}Denominator`)
    inputsToClear.push(numeratorInput, denominatorInput)
  } else {
    elementToHide = document.getElementById(`${elementIDStem}_WholeInputs`)
    elementToShow = document.getElementById(`${elementIDStem}_FractionalInputs`)
    const wholeInput = document.getElementById(`ingredient${num}Whole`)
    inputsToClear.push(wholeInput)
  }

  elementToHide.style.display = 'none'
  elementToShow.style.display = 'block'
  inputsToClear.forEach((input) => {
    console.log("inputs", input)
    input.value = ''
  })
}