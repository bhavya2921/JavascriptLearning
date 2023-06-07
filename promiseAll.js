function job(delay) {
    return new Promise(function(resolve,reject) {
        
        setTimeout(function() {
            let num = randomNoGenerator(10);
            if (num<8){
                console.log('Resolving', delay);
                resolve('done ' + delay);
            }else{
                console.log('Rejecting', delay);
                let errortype = {};
                errortype.value= delay;
                if (randomNoGenerator(2)<1) errortype.type = "Syntax";
                else errortype.type="Runtime";
                reject(errortype);
            }
        }, delay);
    });
}

function randomNoGenerator(range){
    let num = Math.random();
    num = Math.floor(num*range)+1;
    return num;
}

randomNoGenerator();

let promiseArray=[];

for (let i=0;i<5;i++){
    promiseArray.push(job(randomNoGenerator(2000)));
}

var promise = Promise.all(
    promiseArray
);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
},error=>{
    if (error.type==="Runtime"){
        throw error;
    }
    console.log("Syntax Error",error);
}).catch(error=>{
    console.log("Runtime Error",error);
})
