const helloWorld = (message: String): String => {
    return 'Hello: ' + message;
};

const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
const sumArrayItems = (items: Array<number>): number => {
    return items.reduce(reducer);
}

console.log(helloWorld('Erni'));
console.log(sumArrayItems([10,20,30,40]));