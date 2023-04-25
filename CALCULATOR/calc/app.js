const keys = document.querySelectorAll('.key')
const display_input = document.querySelector('.display .input')
const display_output = document.querySelector('.display .output')

let input = "";
for(let each of keys){
    let value = each.dataset.key;

    
    each.addEventListener('click', ()=>{
        if(value === "clear"){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        }else if(value === "backspace"){
            input = input.slice(0, -1)
            display_input.innerHTML = cleanInput(input);
        }else if(value === "="){
            let result = eval(prepareInput(input));

            display_output.innerHTML = cleanOutput(result)        
        }else if(value === "brackets"){
            if(input.indexOf('(')===-1||
            input.indexOf('(')!==-1 && 
            input.indexOf(')')!==-1 && 
            input.lastIndexOf('(')< input.lastIndexOf(')')){
                input+='('
            }else{
                 input += ')'
            }
            display_input.innerHTML = cleanInput(input); 
          }else{
            if(validateInput(value)){
                input += value;
            display_input.innerHTML = cleanInput(input);
            }
          }
          if(input ===""){
            

            display_output.innerHTML = ""      
          }
    })
}


function cleanInput(input){
let input_array = input.split("");
let input_array_length = input_array.length;  
 
for(let i=0;i<input_array_length; i++){
    if(input_array[i] ==="*"){
        input_array[i] = '<span class="operator">x</span>'
    }else if(input_array[i] ==="/"){
        input_array[i] = '<span class="operator">÷</span>'
    } else if(input_array[i] ==="+"){
        input_array[i] = '<span class="operator">+</span>'
    } else if(input_array[i] ==="-"){
        input_array[i] = '<span class="operator">-</span>'
    }else if(input_array[i] ==="("){
        input_array[i] = '<span class="brackets">(</span>'
    }else if(input_array[i] ===")"){
        input_array[i] = '<span class="brackets">)</span>'
    }
}
return input_array.join("")
}
function cleanOutput(output){
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];
    
    let output_array = output_string.split(""); 
    if(output_string.length >3 ){
        for(let i =output_string.length-3; i>0; i-=3 ){
            output_string.splice(i,0,",")
        }
    }
        if(decimal){
            output_array.push(".")
            if(decimal.split("").length > 12){
            let finalDecimal = decimal.split("").slice(0,11)
           finalDecimal = finalDecimal.join("")
            output_array.push(finalDecimal)
            }else{
            output_array.push(decimal)
        }
        }
        return output_array.join("")
}


function validateInput(value){
    let last_input = input.slice(-1)
    let operators = ['*','/','-','+','%']
    if(value ==='.'&& last_input ==='.'){
        return false
    }if(operators.includes(value)&& last_input.includes(value)){
        return false 
    }
    return true
}

function prepareInput(value){
    let input_array = value.split("")
    for (let i = 0; i<input_array.length; i++){
        if(input_array[i]==="%"){
            input_array[i]= "/100";
        }
    }
    return input_array.join("")
}