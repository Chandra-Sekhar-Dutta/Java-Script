const arr = [2, 3, 4, 6, 8, 19]

function FilterEven(a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}

const result = arr.filter(FilterEven);
console.log(result)

console.log("\nAnother Example\n")

const names = ["Lila", "Monisha", "Luilu"]

const FilteredNames = names.filter(function(a) {
    if (a.length == 4) {
        return true;
    } else {
        return false
    }
})
console.log(FilteredNames)