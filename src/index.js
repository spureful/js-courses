/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(argum) {

    return argum;
}

returnFirstArgument('hello');

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */
function sumWithDefaults(a, b = 100) {

    return a + b;

}

sumWithDefaults(30, 3);

// task  2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

function sumWithDefaultsPlus(a, b = 100) {

    return a + b;

}

sumWithDefaultsPlus(5);

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(fn) {

    return fn();

}

returnFnResult(() => 'hello again')

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */
function returnCounter(number = 0) {

    return function () {
        number++;
        
        return number;

    }
}

returnCounter(10);

/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
function returnArgumentsArray(...args) {
    
    return args
}

returnArgumentsArray(1, 2, 3, 4, 5)

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */
function bindFunction(fn, ...args) {

    fn = fn.bind(null, ...args);
    
    return fn;

}
// cделала две функции sum и mul для теста
function sum(c, d, e) {

    return c + d + e;

}

function mul(c, d) {
    return c * d;
}

bindFunction(sum, 1, 2, 3);

bindFunction(mul, 2, 4);

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
