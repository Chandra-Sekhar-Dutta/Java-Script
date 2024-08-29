function AwaitFunction() {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 1000)
    })
    return p
}

async function main() {
    let p = await AwaitFunction()
    console.log(p)
}

main()