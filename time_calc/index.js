// Query Selectors
const time1 = document.querySelector('#time_1')
const time2 = document.querySelector('#time_2')
const result = document.querySelector('.result')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const clear = document.querySelector('.clear')


//Add function 

function addTime(time1, time2) {
    var t1 = time1.split(" : ");
    var t2 = time2.split(" : ");
    
    var hours = parseInt(t1[0]) + parseInt(t2[0]);
    var minutes = parseInt(t1[1]) + parseInt(t2[1]);
    var seconds = parseInt(t1[2]) + parseInt(t2[2]);
    
    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    
    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    
    return hours + ":" + minutes + ":" + seconds;
  }
  
  // subtract function
  function subtractTime(time1, time2) {
    var t1 = time1.split(" : ");
    var t2 = time2.split(" : ");
    
    var hours = parseInt(t1[0]) - parseInt(t2[0]);
    var minutes = parseInt(t1[1]) - parseInt(t2[1]);
    var seconds = parseInt(t1[2]) - parseInt(t2[2]);
    
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    
    return hours + " : " + minutes + " : " + seconds;
  }

// Cleaner functions

//throws an alert when the wrong time syntax is used
function cleanInput(time){
 let split = time.value.split(' : ').length
  if(split === 3){
    return true
 }else{
    return false
 }
}
// only allows numbers, colons, and the spacebar keys to be used 
function noText(){
document.addEventListener('keypress' , (event)=>{
    if(!parseInt(event.key) && event.key !== ' ' && event.key !== ':' && event.key !== '0'){
        event.preventDefault()
            }
})
}
noText();





document.addEventListener('keypress', (event)=>{
    if(event.key === 'c'){
    time1.value = ''
    time2.value = ''
    result.innerText = ''
    result.classList.remove('answer')
    }
  })


 document.addEventListener('keypress', (event)=>{
    if(event.key === 'a'){ 
  let time_1 = cleanInput(time1)
  let time_2 = cleanInput(time2)
  if(time_1 && time_2){
    let addValue = addTime(time1.value, time2.value)
    result.classList.add('answer')
    result.innerText = addValue
  }
    }
  })



  document.addEventListener('keypress', (event)=>{
    if(event.key === 's'){
     
  let time_1 = cleanInput(time1)
  let time_2 = cleanInput(time2)
  if(time_1 && time_2){
   
    let subValue = subtractTime(time1.value, time2.value)
    result.classList.add('answer')
    result.innerText = subValue
  }
    }
  }
  )
 function addBtn(){
  add.addEventListener('click', ()=>{
    let time_1 = cleanInput(time1)
  let time_2 = cleanInput(time2)
  if(time_1 && time_2){
    let addValue = addTime(time1.value, time2.value)
    result.classList.add('answer')
    result.innerText = addValue
  }
  })
  add.addEventListener('mouseover', (event)=>{
    add.innerText = 'Or press A'   
      }  
      )
      add.addEventListener('mouseout', event=>{
        add.innerText = 'add'  
      })
 }
addBtn();
  function subBtn(){
  subtract.addEventListener('click', ()=>{
    let time_1 = cleanInput(time1)
    let time_2 = cleanInput(time2)
    if(time_1 && time_2){
     
      let subValue = subtractTime(time1.value, time2.value)
      result.classList.add('answer')
      result.innerText = subValue
  }})
  subtract.addEventListener('mouseover', (event)=>{
    subtract.innerText = 'Or press S'   
      }  
      )
      subtract.addEventListener('mouseout', event=>{
        subtract.innerText = 'subtract'  
      })  }
subBtn();

function clearBtn(){
  clear.addEventListener('click',()=>{
    time1.value = ''
    time2.value = ''
    result.innerText = ''
    result.classList.remove('answer')
  })

  clear.addEventListener('mouseover', (event)=>{
clear.innerText = 'Or press C'   
  }  
  )
  clear.addEventListener('mouseout', event=>{
    clear.innerText = 'clear'  
  })
}
clearBtn();