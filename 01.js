const fs = require('fs')
const readdir = () => new Promise((resolve, reject) => {
    fs.readdir('/', (err, data) => {
        err ? reject(err) : resolve(data)
    })
})

const run = async () => {
    const res = await readdir()
    try {
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
run()