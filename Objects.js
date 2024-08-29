const O1 = {
    Name: "Chandra Sehar Dutta",
    Age: 21,
    Learning: "Java Script"
}

console.log(O1.Name);
console.log(O1.Age);
console.log(O1.Learning);

console.log("Objects in the array-");

const Arr = [{
        Name: "Anup",
        Age: 32,
        Learning: "Python"
    },

    {
        Name: "Manoj",
        Age: 23,
        Learning: "C++"
    },

    {
        Name: "Kunal Das",
        Age: 22,
        Learning: "Java"
    }
];

console.log(Arr[0]);
console.log(Arr[1]);
console.log(Arr[2]);

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i]["Age"] >= 22) {
        console.log(Arr[i]["Name"]);
    }
}