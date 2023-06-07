async function promiseAll(values){
    let cont1 =0;
    let cont2 =0;
    for (element of values){
        await Promise.resolve(element).then(result=>{
            cont1++;
            console.log(result)
        },err=> {
            console.log(err,"rejected")
        }).catch(err => err)
    };

    if (cont1===values.length) return "all resolved"
    else throw new Error("some rejected"); 
    
    
}

const arr = [
    new Promise((resolve,reject)=> setTimeout(()=> resolve("first"),1000)),
    Promise.reject("second resolve"),
    Promise.resolve("third resolve"),
]

promiseAll(arr).then(result=> console.log(result)).catch(err => console.log(err))

const arr2 = [
    new Promise((resolve,reject)=> setTimeout(()=> resolve("first"),1000)),
    Promise.resolve("second resolve"),
    Promise.resolve("third resolve"),
]

promiseAll(arr2).then(result=> console.log(result)).catch(err => console.log(err))

