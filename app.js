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
   

//Functionalities

 //Submitting the form and adding to ul
form.addEventListener('submit',function(event){
    event.preventDefault();
    const userInput = formInput.value;
const li = document.createElement('li');
const span = document.createElement('span');
span.textContent = userInput;
li.appendChild(span);
const label = document.createElement('label');
label.textContent = 'Confirmed'
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
label.appendChild(checkbox);
li.appendChild(label);
const editBtn = document.createElement('button');
editBtn.innerText ='Edit';
li.appendChild(editBtn);
const removeBtn = document.createElement('button');
removeBtn.innerText ='Remove';
li.appendChild(removeBtn);
ul.appendChild(li);
input.value = '';

})
ul.addEventListener('change', function(event){
    const checkbox = event.target;
    const state = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if(state){
        li.className = 'responded';
    }else li.className = '';
})
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