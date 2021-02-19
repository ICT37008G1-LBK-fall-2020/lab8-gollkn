const promise1 = () =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(new Date().getSeconds())
        },10000)
    })
}

const promise2 = () =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(new Date().getMinutes())
        },20000)
    })
};

const promise3 = () =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(new Date().getHours())
        },0)
    })
};

Promise.all([promise1(),promise2(),promise3()]).then((promiseResults) =>{
    console.log(promiseResults);
    console.log(promiseResults.reduce((a, b) => a + b, 0),'results');
})

