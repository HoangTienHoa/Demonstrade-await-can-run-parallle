//Create mmethod to 
function doSomethingHeavy(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
};

async function series() {
    const start = Date.now();

    await doSomethingHeavy(1000);
    await doSomethingHeavy(1000);

    const period = Date.now() - start;
    console.log(`Series method use ${period / 1000} seconds`);
}

async function parallel() {
    const start = Date.now();

    const wait1 = doSomethingHeavy(1000);
    const wait2 = doSomethingHeavy(1000);
    await wait1;
    await wait2;

    const period = Date.now() - start;
    console.log(`Parallel method use ${period / 1000} seconds`);
}

series();
parallel();

//Result
// Parallel method use 1.005 seconds
// Series method use 2.009 seconds