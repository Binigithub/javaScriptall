//ass28

let myAge = function(age){

return new Promise(function(resolve, reject){

if (age>=18){

resolve ()

} else {

reject ()

}
})
}
let showTheCar = function(){

return new Promise(function(resolve,reject){

let happy = false;

if (happy){

resolve ()

} else {

reject ()

}

})

}

myAge(18).then(function(){

return showTheCar()

}).then(function(){

console.log("Got a car");

}).catch(function(){

console.log("No car this time");

})


