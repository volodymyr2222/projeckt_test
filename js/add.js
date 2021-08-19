const blockForms = document.querySelector('.block_forms');
const formsButton = document.querySelector('.forms_button');
const mainBlock = document.querySelector('.main_block');
const checkboxRem = document.querySelectorAll('.pers .checkbox .container');
const checkboxMy = document.querySelectorAll('.my');
const sure = document.querySelector('.sure');


//добавляння
formsButton.addEventListener('click', function () {
  const block = document.querySelectorAll('.main_block .block_forms');
  const input = document.querySelectorAll('.main_block .forms_time');
   // провірка на заповнення імпутів

  let bull = true
  input.forEach((item) => {
      if (item.children[1].value == '') {
          bull = false
          // перевірка на інпути
          item.children[2].style.opacity = 1
      }
     })

//додавання блоку
      if(block.length < 7 && bull && erororChe() === 0) {
      appendBlock()  
    } else {
      erororChe()
    }
   auditCheckbox ()

});
 //провірка на заповення чекбоксів
function erororChe() {
  const block = document.querySelectorAll('.main_block .block_forms');
     let arrCheckboxBool = [];
     for(let key of block) {
       let res = key.children[4].children
       let arrChek = []
       let arr_chekbox
       for(let i = 0; i < res.length-1;i++) {
        const resBull = res[i].children[1].checked
        arr_chekbox = res[i].parentElement.parentElement;
        if(resBull === true) {
          arrCheckboxBool.push(resBull)
        } else {
          arrChek.push(false)
        }
     }
     if(arrChek.length === 7){
      arr_chekbox.children[3].children[3].style.opacity = 1
      arrCheckboxBool.push(false)

     } 
    }
let filterCheckbox = arrCheckboxBool.filter(i => i === false).length
return filterCheckbox
}


// клонування блоку
function appendBlock() {
  const a =  blockForms.cloneNode(true); 
  a.classList.remove('pers')
  mainBlock.append(a);

  auditInput(); 
  removeBlock();
}
appendBlock()

// функція провірки інпута
function auditInput () {
  const input = document.querySelectorAll('.main_block .forms_time input');
  for(let key of input){
  key.addEventListener('blur', function (i) {

  const timeOne = document.querySelectorAll('main .block_forms .inputOne input');
  const timeThow = document.querySelectorAll('main .block_forms .inputTwo input');

  for(let i = 0; i < timeOne.length; i++) {
    let a = timeOne[i].value.split('');
    let b = timeThow[i].value.split('');

  let aArr = a.slice(0,2).join('')
  let bArr = b.slice(0,2).join('')

    if (b != '') {
      if (aArr < bArr) {
    } else {
        this.value=''
        this.parentElement.children[2].style.opacity = 1;
    }
}
  }
  let value = this.value;
  let valueArr = value.split('')

  if(value.length < 6 ) {
  if (value.length === 1 && parseInt(+valueArr[0])) {

        this.value = `0${value}:00`.split();
  } else if(!parseInt(+valueArr[0])){
    this.value=''
    // this.parentElement.children[2].innerHTML = 'ERROR ENTER NUMBERS'
    this.parentElement.children[2].style.opacity = 1;
  }
  if (value.length === 2 && parseInt(+valueArr[1])) {
    if(+valueArr[0] < 3){
      if (+valueArr[0] == 2) {
        if (+valueArr[1] > 3) {
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
        }else {
        this.value = `${value[0]}${value[1]}:00`.split();
      }
      } else {
  this.value = `${value[0]}${value[1]}:00`.split();
          }
    } else{
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
    }
   } else if(value.length === 2 && !parseInt(+valueArr[1])) {
    this.value=''
    this.parentElement.children[2].style.opacity = 1;
   }
   if (value.length === 3 && parseInt(+valueArr[1])) { 
    if(+valueArr[0] < 3 && +valueArr[2] < 6){
      if (+valueArr[0] == 2 ) {
        if (+valueArr[1] > 3 ) {
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
        }else {
   this.value = `${value[0]}${value[1]}:${value[2]}0`.split();
      }
      } else {
        this.value = `${value[0]}${value[1]}:${value[2]}0`.split();
          }
    } else{
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
    }
   }else if (value.length === 3 && !parseInt(+valueArr[1])) {
    this.value=''
    this.parentElement.children[2].style.opacity = 1;
   }
   if (value.length === 4 && parseInt(+valueArr[1]) && parseInt(+valueArr[1])) {
    if(+valueArr[0] < 3 && +valueArr[2] < 6){
      if (+valueArr[0] == 2 ) {
        if (+valueArr[1] > 3 ) {
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
        }else {
  this.value = `${value[0]}${value[1]}:${value[2]}${value[3]}`.split();
      }
      } else {
        this.value = `${value[0]}${value[1]}:${value[2]}${value[3]}`.split();
          }
    } else{
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
    }
   } else if (value.length === 4 && !parseInt(+valueArr[1]) &&!parseInt(+valueArr[3])) {
    this.value=''
    this.parentElement.children[2].style.opacity = 1;
   }
  if (value.length === 5 ) {
    if(value[2] == ':' && +valueArr[0] < 3 && +valueArr[3] < 6){
      if (+valueArr[0] == 2 ) {
        if (+valueArr[1] > 3 ) {
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
        this.value = `${value[0]}${value[1]}${value[2]}${value[3]}${value[4]}`.split();
      }
      } else {
   this.value = `${value[0]}${value[1]}${value[2]}${value[3]}${value[4]}`.split();
          }
    } else{
      this.value=''
      this.parentElement.children[2].style.opacity = 1;
    }
   }
  }else {
    this.value=''
    this.parentElement.children[2].style.opacity = 1;
  }
  });
key.addEventListener('focus', function () {
  this.value=''
  this.parentElement.children[2].style.opacity = 0;
  })
  }
}

//перевірка чекбоксів
function auditCheckbox (){
  const block = document.querySelectorAll('main .main_block .block_forms .checkbox .container')
  for(const item of block){
    item.children[2].addEventListener('click', function (){
      let element = item.children[0].textContent.trim()
      this.parentElement.parentElement.parentElement.children[3].children[3].style.opacity = 0
      for (const i of checkboxRem){
       let a = i.children[0].textContent.trim()
       
        if (element === a) {
          i.children[1].disabled = true
          i.children[2].classList.add('allCheckmark1')
        } 
          }
      if (item.children[1].checked) {
        item.children[1].disabled = false
            for(let i of block){
              let a = i.children[0].textContent.trim()
              if (element == a) {
                i.children[1].disabled = false
                i.children[2].classList.remove('allCheckmark1')
              }
              }
            for(let i of checkboxRem){
              let a = i.children[0].textContent.trim()
              
              if (element == a) {
                i.children[1].disabled = false
                
              }
            }
          } else {
            setTimeout(()=> {
              for(let i of block){
                let a = i.children[0].textContent.trim()
                if(element === a){
                  i.children[1].disabled = true
                  if (i.children[1].checked == false){
                    
                    i.children[2].classList.add('allCheckmark1')
                  }
                }
              }
            })
          }

    })
     
  }
}
auditCheckbox ()



//зберігання
let infoArr = [];

function info() {
 infoArr = [];
  const info = document.querySelectorAll('.main_block .block_forms')
  for (let key of info) {
      var input_1 = key.children[1].children[1].value
      var input_2 = key.children[3].children[1].value
      const checkbox = key.children[4].children
      var checkboxArr = []
// console.log(key);
      for (let key of checkbox) {
         console.log(key);
        if(key.children[1].checked){
          let a = key.children[0].textContent
          checkboxArr.push(a)
         
        }
      }
      const infoObj = {
        hour: {
            time1: input_1,
            time2: input_2,
        },
    days: checkboxArr
  }
  infoArr.push(infoObj);  
}

if (input_1 !== '' && input_2 !== '' && checkboxArr.length) {
  // console.log(infoArr);
} else if (checkboxArr.length === 0) {
  for(let key of info) {
key.children[3].children[3].style.opacity = 1
  }
  
}


}

// видалення
function removeBlock () {
 let rem =  document.querySelectorAll('main .main_block .block_forms .forms_button')
  for(const key of rem){
    key.addEventListener('click', function(item) {
      this.parentElement.remove()
     validationCheckboxUponRemoval(item)
    })
    
  }
   
}


// редагування видалення

function validationCheckboxUponRemoval(item) {
const block1 = document.querySelectorAll('.pers .checkbox .container')
const block2 = document.querySelectorAll('main .main_block .block_forms .checkbox .container')
let a = item.path[1].children[4].children

for(let element of a){
  if (element.children[1].checked) {
    let span = element.children[0].textContent.trim()
    for (let i of block1) {
      let span1 = i.children[0].textContent.trim() 
      if (span === span1) {
        i.children[1].disabled = false
      }
        }
    for (let i of block2) {
        let span1 = i.children[0].textContent.trim()
        if (span === span1) {
          i.children[1].disabled = false
          i.children[2].classList.remove('allCheckmark1')
          
          }
        }
}
}

}
