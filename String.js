function AboutString(string) {
    console.log("Original String:", string);
    console.log("Length of the string is:", string.length);
}

function FindTarget(string, target) {
    if (string.indexOf(target) < 0) {
        console.log("Not Found");
    } else {
        console.log("Target is at: ", string.indexOf(target));
    }
}

function FindFirstTarget(string, target) {
    if (string.indexOf(target) < 0) {
        console.log("Not Found");
    } else {
        console.log("Target is at: ", string.indexOf(target));
    }
}

function FindLastTarget(string, target) {
    if (string.lastIndexOf(target) < 0) {
        console.log("Not Found");
    } else {
        console.log("Target is at: ", string.lastIndexOf(target));
    }
}

function ReplaceString(string, target, newstring) {
    let NewString = string.replace(target, newstring);
    return NewString;
}

function SplitString(string) {
    let value = string.split(" ");
    return value;
}

let string = "type any string";
AboutString(string);
FindTarget(string, "AString");
FindFirstTarget(string, "t");
FindLastTarget(string, "t");

let NewString = ReplaceString(string, "type", "Type");
console.log(NewString);

console.log(SplitString(string));
console.log(SplitString(NewString));

let AnotherString = "         Hiji Biji           ";
console.log(AnotherString.trim());
console.log(AnotherString.toUpperCase());