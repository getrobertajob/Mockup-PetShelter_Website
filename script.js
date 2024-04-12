// variables to store pettings count for each row
var pepPetCount = 3; //variable for Pepper
var bruPetCount = 5; //variable for Bruce
var oscPetCount = 8; //variable for Oscar

// function to remove donate button
// activates on click of donate button
function donate(element) {
  element.remove();
}

// function to alert results from petType selection
// activated on updating seletion from id="petType"
// displays value of option selected
function alertType(element) {
  console.log("----------");
  if (element == "Cat") {
    alert("You are looking for a: Cat");
  } else if (element == "Dog") {
    alert("You are looking for a: Dog");
  }
}

// function to increase pettings count for each row
// activates on click of pet button
// add to the Pet Count value for that row
function addPets(petName) {
   petTotal = document.getElementById(petName).value;
   petTotal++;
  document.getElementById(petName).value = (petTotal);
}
