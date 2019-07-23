let rootNode = document.getElementById('root');
const form = document.getElementById('add-form');
const itemList = document.getElementById('items');
const activeInput = document.getElementById('new-item');
const maxElements = 10;
let dragSrcEl;

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);

function addItem(e) {
    e.preventDefault();

    let liElements = document.getElementsByClassName('to-do-item');
    const maxLi = document.getElementById('parag-maximum');
    if (liElements.length >= maxElements) {
        maxLi.style.display = 'block';
        activeInput.blur();

        return false;
    }
    
    const li = document.createElement('li');
    li.className = 'to-do-item';
    li.setAttribute('draggable','true');

    let newItem = document.getElementById('new-item').value;

    if (newItem.trim() === '') {

        return false;
    }

    const divDinBtnAndSpan = document.createElement('div');
    divDinBtnAndSpan.className = 'check-and-span';

    const cropDinBtn = document.createElement('button');   
    cropDinBtn.className = 'check-button';
    const iconCheck = document.createElement('i');
    iconCheck.className = 'material-icons check-btn';
    let iconCheckText = document.createTextNode('crop_din');
    
    iconCheck.appendChild(iconCheckText);
    cropDinBtn.appendChild(iconCheck);
    divDinBtnAndSpan.appendChild(cropDinBtn);

    const spanItem = document.createElement('span');
    spanItem.className = 'item-text';
    const spanItemText = document.createTextNode(newItem);
    spanItem.appendChild(spanItemText);
    divDinBtnAndSpan.appendChild(spanItem);

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-button'; 
    const iconEdit = document.createElement('i');
    iconEdit.className = 'material-icons edit-btn';
    let iconEditText = document.createTextNode('edit');

    iconEdit.appendChild(iconEditText);
    editBtn.appendChild(iconEdit);
    divDinBtnAndSpan.appendChild(editBtn);
    li.appendChild(divDinBtnAndSpan);

    const divForDeleteBtn = document.createElement('div'); 
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    const iconDlt = document.createElement('i');
    iconDlt.className = 'material-icons dlt';
    const iconDltText = document.createTextNode('delete');
    iconDlt.appendChild(iconDltText);
    deleteBtn.appendChild(iconDlt);
    divForDeleteBtn.appendChild(deleteBtn);
    li.appendChild(divForDeleteBtn);

    itemList.appendChild(li);

    document.getElementById('new-item').value = '';

    cropDinBtn.addEventListener('click', checkItem);

    function checkItem(e) {
        if (e.target.classList.contains('check-btn')) {
            iconCheckText.nodeValue = 'check_box';
        }
    }
    function dragStart(e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
    }

    function dragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function drop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (dragSrcEl !== this) {
            dragSrcEl.parentNode.removeChild(dragSrcEl);
            this.parentNode.insertBefore(dragSrcEl, this);
        }

        return false;
    }

    const allTask = document.querySelectorAll('.to-do-item');
    [].forEach.call(allTask, function(task) {
        task.addEventListener('dragstart', dragStart, false);
        task.addEventListener('dragover', dragOver, false);
        task.addEventListener('drop', drop, false);
    });
}

function removeItem(e) {
    if (e.target.classList.contains('dlt')) {
        const li = e.target.parentElement.parentElement.parentElement;
        itemList.removeChild(li);
    }
    let liElements = document.getElementsByClassName('to-do-item');
    const maxLi = document.getElementById('parag-maximum');
    if (liElements.length < maxElements) {
        maxLi.style.display = 'none';
    }
}
function editItem(e) {
    if (e.target.classList.contains('edit-btn')) {
        let textHide = document.getElementsByClassName('item-text');
        let checkHide = document.getElementsByClassName('check-btn');
        checkHide[0].style.display = 'none';
        let copyText = textHide[0].innerText;
        textHide[0].outerHTML = '<input class="item-text item-input">';
        textHide[0].value = copyText;
        let ico = document.getElementsByClassName('edit-btn');
        ico[0].innerText = 'save';
        ico[0].addEventListener('click', (e) => {
            if (e.target.innerText === 'save') {
                checkHide[0].style.display = 'block';
                let copyText = textHide[0].value;
                textHide[0].outerHTML = '<span class="item-text"></span>';
                textHide[0].innerText = copyText;
                ico[0].innerText = 'edit';
                e.stopPropagation();
            }
        });
    }
}

