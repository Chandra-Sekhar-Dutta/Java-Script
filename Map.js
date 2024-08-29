const arr1 = [1, 2, 3, 9, 4, 5, 7, 6, 8]

function MultiplyBytwo(a) {
    return 2 * a
}

const result = arr1.map(MultiplyBytwo)
console.log(result)

console.log("\nThe general way-\n")

const arr2 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function Double(a) {
    return 2 * a;
}

function Map(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        console.log(func(arr[i]));
    }
}

Map(arr2, Double)