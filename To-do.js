let toDoItems = document.getElementById('display-items');
let input =  document.getElementById('user-input');

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
    displayItem();
});

function displayItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'items';
    divParent.innerHTML = '<div>'+ input.value + '</div>';

    checkIcon.className ='fa fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', () => {
        checkIcon.style.color = 'limegreen';
        divParent.style.border = '1px solid limegreen';
    });

    divChild.appendChild(checkIcon);

    trashIcon.className = 'fa fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', () => {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}

