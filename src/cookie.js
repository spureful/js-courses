/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

/////////////

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
//    const cookieRows =  listTable.querySelectorAll('tr');
  
//   for (const cookieRow of cookieRows) {
//     if(cookieRow.textContent.includes(filterNameInput.value)) {
//       cookieRow.style.display = 'table-row'
//     }else {
//        cookieRow.style.display = 'none'
//     }
    
//   }


});

addButton.addEventListener('click', () => {
    
  // здесь можно обработать нажатие на кнопку "добавить cookie"
  
  
//   const cookiesName = document.querySelectorAll('.name-cookie');
 
//   setCookie(addNameInput.value, addValueInput.value);
  
    
//   if (addNameInput.value.includes(filterNameInput.value) || addValueInput.value.includes(filterNameInput.value) || filterNameInput.value == '') {
//     addTr(addNameInput.value,  addValueInput.value);}
  
//   for (const cookieName of cookiesName) {
//       if(cookieName.textContent == addNameInput.value && (addValueInput.value.includes(filterNameInput.value) || filterNameInput.value == '')) {
//         cookieName.nextSibling.textContent = addValueInput.value;
//         listTable.lastChild.remove();
//       } else if (cookieName.textContent == addNameInput.value && (!addValueInput.value.includes(filterNameInput.value) && filterNameInput.value != '')){
//         cookieName.parentNode.remove();
//         listTable.lastChild.remove();
//       }
   
//   }

document.cookie = '123=123'

  addNameInput.value = '';
  addValueInput.value = '';
  
 
});

listTable.addEventListener('click', function(e) {
  
        if (e.target.tagName == 'BUTTON') {
          const btnParent = e.target.parentNode;
          btnParent.parentNode.remove();
          
          deleteCookie(btnParent.parentNode.firstChild.textContent);
                
                   
        }
});

function addTr(name, val) {
  const cookieRaw = document.createElement('tr');
  const cookieName = document.createElement('td');
  const cookieValue = document.createElement('td');
  const cookieDelete = document.createElement('td');
  const cookieDeleteBtn = document.createElement('button');
  
  cookieDeleteBtn.textContent = 'удалить';
  cookieDeleteBtn.classList.add('delete-cookie')
  
  cookieName.innerText = name;
  cookieName.classList.add('name-cookie');
   
  cookieValue.innerText = val;
  
  cookieDelete.appendChild(cookieDeleteBtn);
  cookieRaw.appendChild(cookieName);
  cookieRaw.appendChild(cookieValue);
  cookieRaw.appendChild(cookieDelete);
  
 listTable.appendChild(cookieRaw);

}

function setCookie(name, value, options = {}) {

  options = {
    ...options
  };


  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
    
  document.cookie = updatedCookie;
}


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
} 
