// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как одноименные методы массивов.

// 1. Array.prototype.indexOf()
console.log(`-------- indexOf`);
{

    function funcIndexOf (array, searchElement, fromIndex = 0) {
        if ((fromIndex >= array.length)) return -1;
        if (fromIndex < 0) {
            for (let i = array.length + fromIndex; i <= array.length; i++) {
                if (i === array.length) return -1;
                else if (searchElement === array[i]) return i;
            }
        } else {
            for (let i = fromIndex; i <= array.length; i++) {
                if (i === array.length) return -1;
                else if (searchElement === array[i]) return i;
            }
        }
    }

    // проверки
    const arr = [2, 5, 9, 2, 5, 9];

    console.log(arr.indexOf(2));     // 0
    console.log(funcIndexOf(arr, 2)); // 0

    console.log(arr.indexOf(7));     // -1
    console.log(funcIndexOf(arr, 7)); // -1

    console.log(arr.indexOf(9, 2));  // 2
    console.log(funcIndexOf(arr, 9, 2)); // 2

    console.log(arr.indexOf(2, -1)); // -1
    console.log(funcIndexOf(arr, 2, -1)); // -1

    console.log(arr.indexOf(2, -3)); // 3
    console.log(funcIndexOf(arr, 2, -3)); // 3
}
console.log(`-------- lastIndexOf`);

// 2. Array.prototype.lastIndexOf()
{
    function funcLastIndexOf (array, searchElement, fromIndex = array.length) {
        if (array.length + fromIndex < 0) return -1;
        if (fromIndex < 0) {
            for (let i = array.length + fromIndex; i >= 0; i--) {
                if (i === 0 && searchElement !== array[i]) return -1;
                else if (searchElement === array[i]) return i;
            }
        } else {
            for (let i = fromIndex; i >= 0; i--) {
                if (i === 0 && searchElement !== array[i]) return -1;
                else if (searchElement === array[i]) return i;
            }
        }
    }

    // проверки
    const arr = [0, 5, 3, 2, 5, 9];

    console.log(arr.lastIndexOf(1)); // -1
    console.log(funcLastIndexOf(arr, 1)); // -1

    console.log(arr.lastIndexOf(5, 3)); // 1
    console.log(funcLastIndexOf(arr, 5, 3)); // 1

    console.log(arr.lastIndexOf(9, -2)); // -1
    console.log(funcLastIndexOf(arr, 9, -2)); // -1

    console.log(arr.lastIndexOf(5)); // 4
    console.log(funcLastIndexOf(arr, 5)); // 4

    console.log(arr.lastIndexOf(0, -1)); // 0
    console.log(funcLastIndexOf(arr, 0, -1)); // 0

}
console.log(`-------- find`);

// 3. Array.prototype.find()
{
    function findFunc (arr, callback) {
        for (let i = 0; i <= arr.length; i++) {
            if (callback(arr[i], i, arr)) return arr[i];
        }
    }

    // проверка

    const arr = [1, 2, 3, 4, 5, 6];

    console.log(arr.find(item => item >= 3)); // 4
    console.log(arr.find(item => item >= 7)); // undefined


    console.log(findFunc (arr, ((item) => item >= 3))) // 4
    console.log(findFunc (arr, ((item) => item >= 7))) // undefined
}
console.log(`-------- findIndex`);

// 4. Array.prototype.findIndex()
{
    function findIndexFunc (arr, cb) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (cb(arr[i], i, arr)) return i;
        }
        return -1;
    }

    // проверка

    const arr = [1, 2, 3, 4, 5, 6];

    console.log(arr.findIndex(item => item > 7)); // -1
    console.log(arr.findIndex(item => item > 5)); // 5


    console.log(findIndexFunc (arr, ((item) => item > 7))); // -1
    console.log(findIndexFunc (arr, ((item) => item > 5))); // 5
}
console.log(`-------- includes`);

// 5. Array.prototype.includes()
{
    function includesFunc (array, searchItem, fromIndex = 0) {
        if (fromIndex >= array.length) return false;
        if (fromIndex < 0) {
            for (let i = fromIndex + array.length; i <= array.length - 1; i++) {
                if (searchItem === array[i]) return true;
            }
        } else {
            for (let i = fromIndex; i <= array.length; i++) {
                if (searchItem === array[i]) return true;
            }
        }
        return false;
        
    }

    // проверка
    
    const arr = [1, 2, 3, 4, 5, 6];

    console.log(arr.includes(5,  -2)); // true
    console.log(arr.includes(2, -2)); // false

    console.log(includesFunc (arr, 5, -2)); // true
    console.log(includesFunc(arr, 2, -2)); // false
}
console.log(`-------- every`);

// 6. Array.prototype.every()
{
    function everyFunc (arr, callback) {
        if (arr.length === 0) return true;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (!callback(arr[i], i, arr)) return false;
            else if (i === arr.length - 1) return true;
        } 
    }

    // проверка

    let a = [22, 54, 18, 130, 44]
    let b = []

    console.log(a.every(elem => elem >= 19)); // false
    console.log(a.every(elem => elem >= 17)); // true
    console.log(b.every(elem => elem >= 17)); // true
    
    console.log(everyFunc(a, (elem => elem >= 19))); // false
    console.log(everyFunc(a, (elem => elem >= 17))); // true
    console.log(everyFunc(b, (elem => elem >= 17))); // true
}
console.log(`-------- some`);

// 7 Array.prototype.some()
{
    // Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

    function someFunc (arr, cb) {
        if (arr.length === 0) return false;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (cb(arr[i], i, arr)) return true;
            else if (i === arr.length - 1) return false;
        }
    }

    let a = [22, 54, 18, 130, 44];
    let b = [];

    console.log(a.some(elem => elem < 19)); // true
    console.log(a.some(elem => elem < 18)); // false
    console.log(b.some(elem => elem < 18)); // false
    
    console.log(someFunc(a, (elem => elem < 19))); // true
    console.log(someFunc(a, (elem => elem < 18))); // false
    console.log(someFunc(b, (elem => elem < 18))); // false
}
console.log(`The end`);
