const fs = require('fs')
console.log('start');

fs.readFile('./content/first.txt', 'utf-8', (error, result)=> {
    if (error) {
        console.log(error);
        return
    }
    const first = result
    fs.readFile('./content/subfolder/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
            return
        }
        const second = result
        fs.writeFile('./content/result-async.txt', `here is the result: ${first}, ${second}`,
            (error, result) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log('done with disk task');
            })
    })

})
console.log('starting next task');