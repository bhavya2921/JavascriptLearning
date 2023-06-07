// First Method

function convertToSecond(delayTime){
    return Math.floor(delayTime/1000)
}

function fun(delay){
    console.log("Bhavya intervl of "+convertToSecond(delay));
}


function toCallFirst(fun,delayTime){
    setTimeout(()=>{
        console.log(delayTime);
        fun(delayTime);
        console.log("current Second " + convertToSecond(Date.now()));
        toCallFirst(fun,delayTime);
    },delayTime);
}

function myCurry(functionToCall){
        return function(fun){
            return function(delayTime){
                functionToCall(fun,delayTime);
            }
        }
    }

console.log(convertToSecond(Date.now()));

const curryInterval= myCurry(toCallFirst);
const curryIntervalFunction = curryInterval(fun);

console.log(curryIntervalFunction);

for(let i=1;i<5;i++){
    curryIntervalFunction(i*1000);
}

