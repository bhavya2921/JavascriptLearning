
// async function apiCall(url) {
//     return fetch(url).then(response=>{
//         console.log(response)
//         if (!response.ok){
//             new Error("new Error");
//         }
//         return response.json();
//     })
    
//   }

function randomNoGenerator(low,hi){
    let num = Math.random();
    num = Math.floor(num*(hi-low))+low;
    return num;
}

let promiseArray=[];

const URL = "https://api.zippopotam.us/us/"

for (let i=0;i<5;i++){
    const newURL = URL+randomNoGenerator(33162,33162)
    promiseArray.push(newURL);
}

async function callToApi(){
    Promise.all(
        promiseArray.map(url=> fetch(url))
    ).then(function(data) {
        console.log('All done');
        data.forEach(function(text) {
            if (!text.ok) throw new Error("Big Error")
            
        });
        data.forEach(function(text) {
            text.json().then(data => console.log(data))
            
        });
    },error=>{
        console.log("Syntax Error");
    }).catch(error=>{
        console.log("Runtime Error");
    })
}

callToApi();
