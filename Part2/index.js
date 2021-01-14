console.log("Let's try this again, shall we?")

document.getElementById('idInput', 'colorInput');
const id = idInput
const color = colorInput
console.log(id)
console.log(color)

function setCard(){
    const card = document.getElementById(idInput.value);
    // console.log(card);
    card.style.color = colorInput.value
}


