const URL = "https://jsonplaceholder.typicode.com/posts/"
const urls = [];

for (let i=0;i<5;i++) urls.push(URL+i);

const promises = urls.map(url =>
    fetch(url))


  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result,num) => {
        console.log(result.status);
        if (result.status === 'fulfilled') {
            if (!result.value.ok) console.log("Bad Request for "+urls[num]+" api")
            else result.value.json().then(response=> console.log(response.title,response.id))
        } else if (result.status === 'rejected') {
          console.log(`Promise rejected: ${result.reason.message}`);
        }
      });
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
