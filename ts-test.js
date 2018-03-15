var helloWorld = function (message) {
    return 'Hello: ' + message;
};
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
var sumArrayItems = function (items) {
    return items.reduce(reducer);
};
console.log(helloWorld('Erni'));
console.log(sumArrayItems([10, 20, 30, 40]));
