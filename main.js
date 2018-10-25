'use strict'

let myfavoriteSport = prompt('Do you think Soccer is my favorite Sport?')
if (myfavoriteSport.toLowerCase() === 'yes' ||
myfavoriteSport.toUpperCase() === 'YES') {
  alert('You got it. It it my favorite Sport') 
} else {
  alert('Nice Try, Please try again')
}
let myfavoriteDes = prompt ('Are you sure Hawai is my favorite Destination')
if (myfavoriteDes.toLowerCase() == 'yes' ||
myfavoriteDes.toUpperCase() == 'YES') {
  alert('Wow that is a dream place to be')
 } else{
    alert('Hey It is. How could you doubt that?') 
  }
let numberofsiblings = confirm('I have 6 siblings')
if (numberofsiblings)
console.log(numberofsiblings)
let myfavoriteAuthor = prompt ('Do you know that Philip Yancey is my favorite author?')
if (myfavoriteAuthor.toLowerCase() === 'yes' ||
myfavoriteAuthor.toUpperCase() ==='YES') {
alert(' You are expert at guessing')
} else {
  alert ('Somebody else is in your mind')
}
let mypassion = prompt ('I have strong passion for visiting new places')
if (mypassion.toLowerCase() === 'yes' ||
mypassion.toLocaleUpperCase() === 'YES') {
  alert ('Of course ')}
  else { alert('I do not think you know me well')
}

//let vacationsite =prompt( 'Hawai is my favorie Destination')
//let vacationsite = confirm('Hawai is my favorite destination')
//if(favoriteSport.toLowerCase() === 'yes' ||
//favoriteSport.toUpperCase() === 'YES') {


   //console.log('My favorite hero is ' + favoriteHero + 'and hate Marvel and I am a fantastic person') //Instead of interacting with the developer tool, we can interact with the user using alert 
   


let fastfoodarray = ['Burger King', 'McDonalds', 'Subway', 'Chepotle', 'kfc', 'Popeyes']

//create a loop that will run as many times as there are values in fast food store array
for(let i = 0; i < fastfoodarray.length; i++) {
  let fastfood = prompt('Which one is the healthiest fastfood store?')
  //Check if the prompt returns the number of the choice, if it does, alert the user they are correct and break the for loop
 if(fastfood == 2) {
    alert('Great Job! ' + fastfoodarray[2] + ' is the healthiest fastfood store')
    break
    //else  alert the user they are wrong and how many chances they have left determined by subtracting the current value of i from the length of the hero array
  } else {
    alert('Sorry Try again, you have ' + (fastfoodarray.length - (i)) + ' more tries')
  }
  console.log('index is now ', i)
  console.log(fastfoodarray[i])
}
let chances = 3
let cityArray =['Washingotn', 'LA', 'Seatle', 'San Fransisco', 'New York', 'Atlanta']
while(chances>0) {
  let bestcity = prompt('Which is the best city to visit?')
  for(let i= 0; i < cityArray.length; i++) {
    if(bestcity.toLowerCase() == cityArray[i].toLowerCase()){
      alert('Yes' +cityArray([i]) + 'is one of the best' + cityArray + 'are all valid options.')
      counter++
      chances = 0
      break
    } 
}
let correctAnswer 
if(!correctAnswer) {
  chances --
  alert('Sorry' + bestcity + 'is not one of best cities, you have' + chances + 'more Chances.')}
}
//If (Confirm)=== array, string, integer, or Object, evaluate, evaluates to true, if (!confirm) === undefined, null, false, or empty, or empty string, evaluates to true 
let age = confirm ('I am 34? Uppps')
if (age){
  counter++
}