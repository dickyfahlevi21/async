const myPromise = async () => {
    return new Promise(resolve => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                resolve(console.log(i)) // 1, 2, 3
            }, 1000);
        }
    })
}

(async () => {
    try {
        await myPromise()
        console.log('Done')
    } catch (error) {
        console.log(error.message)
    }
})()