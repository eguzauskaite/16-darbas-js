// 1 legalage
 console.log(sutikimas)

 alert("Vartotojo legalus amžius yra 20 metų")

var legalAge = 20
var claientAge = 32
var claientAge = prompt("Nurodyti savo amžių")

if(claientAge >= 20){
    alert("Vartotojo amžius yra legalus. Prašom užeiti")
} 
else {
    var sutikimas = confirm("Ar turi tėvų/globėjų sutikimą?")
}
if (claientAge < 20){
    alert("Praėjimo nėra. Eikite namo")
}
if(sutikimas == true){
    alert("legalAge")
} else {
    alert("not legalAge")
}

// 2 vardo ilgis

alert("Vardas ilgas, jei susideda iš daugiau kaip 6 raidžių")

var Name = 7
var myName = 4
var Name = prompt("Ar jūsų vardas ilgas? Įrašykite savo vardą: name.lenght")

if(Name >= 7){
    alert("Vardas yra ilgas")
}
else {
    var nurodymas = confirm("Ar vardas yra ilgesnis nei 6 raidės?")
}

if(Name <= 6){
    alert("")
}
if(nurodymas = 7 == true){
    alert("reightLenght")
} 
// 3 amžius

alert("Suaugusio žmogaus amžius yra nuo 19 iki 99 metų")

var Adult = 19 - 99
var claientAge = 30
var claientAge = prompt("Įrašykite savo amžių")

if(claientAge > 99){
    alert("Invalid age")
}

if(claientAge < 0){
    alert("Invalid age")
}
if(claientAge = 19 - 99){
    alert("Adult")
} 
if(claientAge = 1-18){
    alert("Child")
}
// car
alert("Automobilis priklauso VWGroup, BMWGroup ar nei vienai iš šių grupių")

var VWGroup = VW, Audi, Bentley, Bugatti, Lamborhini, Porche
var BMWGroup = BMV, Mini, RollsRoyce
var claientCar = Volvo
var claientCar = prompt("Įrašykite savo automobilo prekės ženklą")

if(claientCar = VW, Audi, Bentley, Bugatti, Lamborhini, Porche){
    alert("vwGroup")
}
if(claientCar = BMV, Mini, RollsRoyce){
    alert("bmwGroup")
}  
else {
    var nurodymas = confirm("Automobilis nepriklauso nei vienai iš šių grupių")
}

    