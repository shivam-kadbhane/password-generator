const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePasswordOne() {
    let passwordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += getRandomCharacter()         
    }
    return passwordOne
}

function generatePasswordTwo() {
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordTwo += getRandomCharacter()         
    }
    return passwordTwo
}

function finalPass() {
    const generatedPasswordOne = generatePasswordOne()
    let passFinalOne = document.getElementById("pass1")
    passFinalOne.textContent = generatedPasswordOne
    const generatedPasswordTwo = generatePasswordTwo()
    let passFinalTwo = document.getElementById("pass2")
    passFinalTwo.textContent = generatedPasswordTwo
}