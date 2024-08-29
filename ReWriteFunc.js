const fs = require("fs");

fs.readFile("New.txt", "utf-8", (error, data) => {
    // removing extra space from the New.txt file
    data = data.split("  ").join(" ");

    fs.writeFile("New.txt", data, (error) => {
        console.log(data);
    });
});