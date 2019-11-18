/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {

    for (let i = 0; i < array.length; i++) {
        
        fn(array[i], i, array);

    }
   
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    
    let newArr = [] ;

    for (let i = 0; i < array.length; i++) {

        newArr.push(fn(array[i], i, array));       

    }

    return newArr;    
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {

    let i = 0;

    let curResult = initial ? initial : array[i++];

    while ( i < array.length) {
            
        curResult = fn(curResult, array[i], i, array);

        i++;

    }

    return curResult;
    
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    let upperArr = [];

    for (let item in obj) {

        upperArr.push(item.toUpperCase());
    
    }

    return upperArr;
}
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {

    let newArr = [];

    (from < 0 ) ? (from = array.length + from) : from;
    (to < 0 ) ? (to = array.length + to) : to;
    (to > array.length) ? (to = array.length) : to;

    for (let i = 0; i < array.length; i++) {

        (from < 0) ? (from = 0) : from;

        if (!from && !to && to != 0) {
            newArr = array
        } else if (from && !to && to != 0) {
            (from < 0) ? (from = 0) : from;
            while (from < array.length) {
                pushArr();
            }
        } else {
            while (from < to) {
                pushArr();
            }
        }
    }
    
    function pushArr() {
        newArr.push(array[from]);
        from++; 
    }

    return newArr;
}
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {

    let objProxyHandler = {

        set: function(target, prop, val) {

            if ( typeof val == 'number') {

                target[prop] = val*val;

                return true;

            } 
        }
    }

    return new Proxy(obj, objProxyHandler); 

}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
