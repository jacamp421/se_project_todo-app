import Popup from "./Popup.js";

class PopupWithForm extends Popup{
constructor({ popupSelector, handleFormSubmit }){
super({popupSelector});
this._popupForm =  this._popupElement.querySelector(".popup__form");
this._handleFormSubmit = handleFormSubmit
}

_getInputValues(){
this._popupForm =  this._popupElement.querySelector(".popup__form");
this._inputList = this._popupForm.querySelectorAll(".popup__input");

const inputValues = {};
this._inputList.forEach((input)=> {
inputValues[input.name] = input.value;



    //add a key/value pair for each input 
    //the key  is input.name
    //the value is input.value
    //use brackets notation
})
return inputValues;
}

setEventListeners(){
    super.setEventListeners();
   this._popupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValues = this._getInputValues();
this._handleFormSubmit(inputValues, evt);
});
}
}

export default PopupWithForm;