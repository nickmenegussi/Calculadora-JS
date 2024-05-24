const input_info = document.getElementById("input-number")
const number_button = document.querySelectorAll(".btn-numbers")
const clearnotall = document.getElementById("btn-clearnotall")
const clearall = document.getElementById("btn-clearall")
const sum = document.getElementById("btn-sum")
const division  = document.getElementById("btn-division")
const multiplication = document.getElementById("btn-multiplication")
const subtraction = document.getElementById("btn-subtraction")
const equal = document.getElementById("btn-equal")

// Variaveis para guardar valores
let operator = ''
let result = ''
 

for (const buttons of number_button){
    buttons.addEventListener('click',function(e){
        const buttonclicked = buttons.getAttribute('data-number')
        input_info.value += buttonclicked // .value é usado para obter ou definir o valor  
    })
}
clearnotall.addEventListener('click', function(e){
    input_info.value = input_info.value.slice(0, -1) 
})

clearall.addEventListener('click', function(e){
    input_info.value = ''
    operator = '' // limpar operacoes antigas
    result = ''
})

// Correto: Quando eu clicar no button sum ele vai verificar se ja existe 
// se nao existir ele vai pegar o valor anterior atribuir + com o novo valor

sum.addEventListener("click",function(e){
    if(operator === ""){
        operator= '+'
        input_info.value += operator
    }
    
})    
division.addEventListener("click", function(e){
    if (operator === ""){
        operator = '/'
        input_info.value += operator
    }
})

multiplication.addEventListener('click', function(e){
    e.preventDefault()
    if (operator === ""){
        operator = '*'
        input_info.value += operator
    }
})

subtraction.addEventListener("click",function(e){
    e.preventDefault()
    if (operator === ""){
        operator = '-'
        input_info.value += operator
        
    }
})

equal.addEventListener("click",function(e){
    result = eval(input_info.value)
    input_info.value = result
    operator = ''
})



// Errada: Pois, eu estou atribuindo para cada botao uma operacao de soma
//number_button.forEach(function(button){
//    sum.addEventListener("click",function(e){
//       const buttonclicked = button.getAttribute('data-number')
//  a     let operatorofsum = "+"
//       input_info.value = buttonclicked + operatorofsum
//    })    
//})
