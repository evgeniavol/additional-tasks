'use strict';


let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let userText = prompt('Введите элемент списка');
    let li = document.createElement('li');

    if (userText === 'del') {
        ul.removeChild(li.lastChild);
    } else if (userText === 'clear') {
        ul.textContent = '';
        ul.removeChild(li.lastChild);
    }else if (userText === '' || userText === ' ') {
        ul.removeChild(li.lastChild);
    } else if (userText=== 'exit' || userText=== null  ) {
        break;
    }
    li.appendChild(document.createTextNode(userText));
    ul.appendChild(li);
}

