// Taken help from internet and frontendMasters

function* asyncFunction() {
    const first = yield new Promise((resolve) => {
      setTimeout(() => resolve(33159), 1000);
    });
    console.log(first);
    const second = yield new Promise((resolve) => {
        setTimeout(() => resolve(first+1), 1000);
      });
    const third = yield fetch("https://api.zippopotam.us/us/"+second)

    return third.json()
  }  

  
  function processNextState(nextState,gen) {

    let done = nextState.done;
    let value = nextState.value;
  
    if (done) {
      return value;
    }

    // Case 1: Yielded a Promise
    if (
      typeof value.then === "function"
    ) {
      return value.then(resolvedValue => {
        return processNextState({   
          done,
          value: resolvedValue
        },gen)
      })
    }

    return processNextState(gen.next(value),gen);
  }

function asyncGENERATOR(generatorFunc) {
    return function wrapper() {
      const gen = generatorFunc();
  
      
  
      const returnValue = processNextState(gen.next(),gen);
      return Promise.resolve(returnValue);
    }
  }

  const func= asyncGENERATOR(asyncFunction);
func(33162).then(x => console.log(x)); 
