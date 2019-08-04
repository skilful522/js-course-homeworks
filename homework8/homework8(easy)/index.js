// 1 Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.
var myArray = [1, 2, 3, 4, 5, 6, 7];
[elem1, elem2, ...elem3] = myArray;
console.log(elem1);
console.log(elem2);
console.log(elem3);

//2
({name = "Аноном", surname = 'Анонимович', age = '? лет'} = {age: '20 '});
console.log(name);
console.log(surname);
console.log(age);

//3
for (let value of myArray.reverse()) {
    console.log(value);
}
//4
var myStr = 'Дана строка. С помощью for...of подсчитайте количество букв "о" в ней.'
var counter = 0;
for (var letter of myStr) {
    if (letter === 'о') {
        counter++;
    }
}
console.log('повтор о : ' + counter);
//5 Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя).
//По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.

var userName;

userName = prompt( "Введите имя ");

if (userName === null || userName === "") {
    userName = undefined;
}

function getName(userName = "Аноним") {
       alert(("Привет " + userName));
}

getName(userName);
