//Capturing Dom element.
const form = document.querySelector('#registrar');
const ul = document.querySelector('#invitedList');
const formInput= form.querySelector('input');
const main = document.querySelector('.main')

//Creating the filtered checkbox
const div = document.createElement('div');
const label = document.createElement('label');
label.textContent = `Hide those who haven't Responded`
const filterBox = document.createElement('input')
filterBox.type = 'checkbox'
label.appendChild(filterBox);
div.appendChild(label)
main.insertBefore(div, ul)
//Functionalities

filterBox.addEventListener('change', function(event){
    event.preventDefault();
    const state = event.target.checked;
    const listElement = ul.children;
    if(state){
        for(list of listElement){
            if(list.className == 'responded'){
                list.style.display = 'block'
            }else list.style.display = 'none'
        }
    }else
    for(list of listElement){
        {list.style.display = 'block'}
    }
        
    
})
  // function for createElement
function createElement(elementName, property, value){
const element = document.createElement(elementName);
element[property] = value;
return element;
}
//Functionalities

//Creating list element 
function createListElement(text){
    const li = document.createElement('li');   
// const span = document.createElement('span');
// span.textContent = text;
const span = createElement('span', 'textContent', text)
li.appendChild(span);
// const label = document.createElement('label');
// label.textContent = 'Confirmed'
const label = createElement('label', 'textContent', 'Confirmed')
// const checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
const checkbox = createElement('input', 'type', 'checkbox');
// checkbox.addClass('check-box');
label.appendChild(checkbox);
li.appendChild(label);
// const editBtn = document.createElement('button');
// editBtn.innerText ='Edit';
const editBtn = createElement('button', 'innerText', 'Edit');
li.appendChild(editBtn);
// const removeBtn = document.createElement('button');
// removeBtn.innerText ='Remove';
const removeBtn = createElement('button', 'innerText', 'Remove');
li.appendChild(removeBtn);
return li;
}

 //Submitting the form and adding to ul
form.addEventListener('submit',function(event){
    if(formInput.value !=''){event.preventDefault();
    const userInput = formInput.value;
    const li = createListElement(userInput)
    ul.appendChild(li)
}else alert('Please Enter a Name')
formInput.value ='';
    
})
//
//Grabin the checkbox state
ul.addEventListener('change', function(event){
    const checkbox = event.target;
    const state = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if(state){
        li.className = 'responded';
    }else li.className = '';
})


//Edit remove & save functionalities

ul.addEventListener('click', function(event){
if(event.target.tagName === 'BUTTON'){
    const button = event.target;
    const li = button.parentNode;
    if(button.textContent == 'Remove'){
        li.remove();
    }else if(button.textContent == 'Edit'){
        const firstChild = li.firstChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = firstChild.textContent;
        li.insertBefore(input, firstChild)
        firstChild.remove();
        button.textContent = 'Save'
    }else if(button.textContent == 'Save'){
        const firstChild = li.firstChild;
        const span = document.createElement('span');
        span.textContent = firstChild.value;
        li.insertBefore(span, firstChild);
        firstChild.remove();
        button.textContent = 'Edit'

    }
}
})