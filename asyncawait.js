function simulateHttpRequest() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
  
async function runAsyncFunction() {
      // resolve after 2 seconds
    console.log(await simulateHttpRequest());
    // wait until console logged and resolve after 2 seconds
    console.log(await simulateHttpRequest());
}
  
runAsyncFunction();