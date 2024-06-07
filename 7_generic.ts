const arrayOfNumbers: Array<number> = [10, 20, 30, 40, 50];
const arrayOfStrings: Array<string> = ['a', 'b', 'c'];
const tupleArray: [string, number] = ['a', 1];

function reverse<T>(arr: Array<T>): Array<T> {
    return arr.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
reverse(tupleArray);


