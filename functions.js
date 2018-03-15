function helloWorld() {
    console.log('Hello world');
};
var sayHelloName = function(name) {
    console.log('Hello ' + name);
};

(function() {
    console.log('IIFE: ', 'Imediatelly incokable function expression');
})();

function* iterateArray() {
    let items = [1, 2, 3];
    for (let i in items) {
        yield i;
    }
 }

const shortVerionOfFatArrow = () => 'Arrow function 1 liner';
const longVersionOfFatArrow = (x, y) => {
    let result = x + y;
    return 'Sum is: ' + result;
}

helloWorld();
sayHelloName('Erni');
var generator = iterateArray();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(shortVerionOfFatArrow());
console.log(longVersionOfFatArrow(5, 3));