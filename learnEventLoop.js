let promise;
setTimeout(()=>{
    console.log(65);
    promise = new Promise((resolve)=>{
        console.log("56464");
        resolve(67);
    }).then((res)=>{console.log(res);})
    console.log(34);
},0);

const promise2 = new Promise((resolve)=>{
        console.log("5");
        resolve(6);
    })
    .then(res=> {console.log(res);})
    setTimeout(()=>{console.log(9);},0);
    console.log(3);

console.log(546);
