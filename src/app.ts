
let button = document.getElementById('buttonClick');


function somarImplicito(param1, param2) {
    return param1 + param2
}

button.addEventListener('click', () => {
    console.log('funcionou')
    console.log(somarImplicito(10, 4))

})



