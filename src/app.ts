
let buttonClick = document.getElementById('buttonClick') as HTMLButtonElement;


function somarImplicito(param1: number, param2: number) {
    return param1 + param2
}

if(buttonClick){
    buttonClick.addEventListener('click', () => {
        console.log('funcionou')
        console.log(somarImplicito(10, 4))
    
    })
    
}




