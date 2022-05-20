const done = true

function myPromise() {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            if (done) {
                const isDone = "It's work"
                rs(isDone)
            } else {
                const isFalse = "Do not work"
                rj(isFalse)
            }
        }, 1000)
    })
}
async function checkFn() {
    try {
        console.log(await myPromise())
    } catch(err) {
        console.log(err)
    }
}

checkFn()



