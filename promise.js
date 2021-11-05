// life of promises
// creating a promise

const myPromise = new Promise((resolve, reject) =>
{
    const n = 0;
    const y = 0;
    if (n === y)
    {
        resolve("they are equal");
    } else{
        reject("they are not the same");
    }
    return myPromise;
})


// async await
