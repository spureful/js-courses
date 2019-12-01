/*
 Страница должна предварительно загрузить список городов из
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 и отсортировать в алфавитном порядке.

 При вводе в текстовое поле, под ним должен появляться список тех городов,
 в названии которых, хотя бы частично, есть введенное значение.
 Регистр символов учитываться не должен, то есть "Moscow" и "moscow" - одинаковые названия.

 Во время загрузки городов, на странице должна быть надпись "Загрузка..."
 После окончания загрузки городов, надпись исчезает и появляется текстовое поле.

 Разметку смотрите в файле towns-content.hbs

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер

 *** Часть со звездочкой ***
 Если загрузка городов не удалась (например, отключился интернет или сервер вернул ошибку),
 то необходимо показать надпись "Не удалось загрузить города" и кнопку "Повторить".
 При клике на кнопку, процесс загрузки повторяется заново
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 */
function loadTowns() {
    return new Promise(async (resolve, reject) => {
        try {

            const response = await fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
         
            if (response.ok) {
                const citiesArr = await response.json();
                citiesArr.sort((a, b) => (a.name < b.name && -1) || (a.name > b.name && 1) || 0);
                resolve(citiesArr);
            } 
        } catch (e) {
            reject()
        }
})
}

/*
 Функция должна проверять встречается ли подстрока chunk в строке full
 Проверка должна происходить без учета регистра символов

 Пример:
   isMatching('Moscow', 'moscow') // true
   isMatching('Moscow', 'mosc') // true
   isMatching('Moscow', 'cow') // true
   isMatching('Moscow', 'SCO') // true
   isMatching('Moscow', 'Moscov') // false
 */
function isMatching(full, chunk) {
    const fullUP = full.toUpperCase();
    const chunkUp = chunk.toUpperCase();
    
    console.log( fullUP, chunkUp)
    
    if (fullUP.includes(chunkUp)) {
      return true
    } else { 
      return false };
}

/* Блок с надписью "Загрузка" */
const loadingBlock = homeworkContainer.querySelector('#loading-block');
/* Блок с текстовым полем и результатом поиска */
const filterBlock = homeworkContainer.querySelector('#filter-block');
/* Текстовое поле для поиска по городам */
const filterInput = homeworkContainer.querySelector('#filter-input');
/* Блок с результатами поиска */
const filterResult = homeworkContainer.querySelector('#filter-result');

/* Здесь реализуем следующее: Во время загрузки городов, на странице должна быть надпись "Загрузка..."
 После окончания загрузки городов, надпись исчезает и появляется текстовое поле.
 
 Плюс часть со звездочкой - при ошибке загрузки добавляем окно с кнопкой повторить*/

const errorDiv = document.createElement('div');
const errorBtn = document.createElement('button');


async function loadList()  {
    try {
        await loadTowns();
      loadingBlock.style.display = 'none';
      filterBlock.style.display = 'block';
             
      } 
    catch(e) {
        errorDiv.textContent = 'Не удалось загрузить города';
        errorBtn.textContent = 'Повторить';
        errorDiv.appendChild(errorBtn);
        homeworkContainer.appendChild(errorDiv);
               
    }
    
  
};
  
loadList()
  
if(errorBtn) {
    errorBtn.addEventListener('click', () => {
        loadList();
        homeworkContainer.removeChild(errorDiv);
    })
}

filterInput.addEventListener('keyup', function() {
    filterResult.innerHTML = '';
  
    (async () => {
      
        const val = filterInput.value;
        const citiesArr = await loadTowns();
        
        for (const city of citiesArr) {     
           const cityItem = document.createElement('div');
    
            if (isMatching(city.name, val) && (val != '')) {
                cityItem.textContent = city.name;
                filterResult.appendChild(cityItem);        
            }        
        }    
   
    })();
  
});

export {
    loadTowns,
    isMatching
};
