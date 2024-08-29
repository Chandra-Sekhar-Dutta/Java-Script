function sum(a, b, fnToCall) {
    const result = a + b;
    fnToCall(result);
}

function ShowResult(data) {
    console.log("the result is:" + data);
}

function Showminus(a, b, arithmaticOperration) {
    const res = arithmaticOperration(a, b);
    return res;
}

function minus(a, b) {
    return a - b;
}

sum(2, 4, ShowResult);

console.log("The result of the difference is =" + Showminus(10, 3, minus));


function Square(a) {
    return a * a;
}

function Cube(a) {
    return a * a * a;
}

function SumOf(Function) {
    return Function + Function;
}

console.log("Sum of sqaure of " + 4 + " = " + SumOf(Square(4)));
console.log("Sum of cubes of " + 4 + " = " + SumOf(Cube(4)));