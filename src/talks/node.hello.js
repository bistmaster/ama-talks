let helloStr = 'Hello';

setTimeout(function () {
    helloStr = 'Hey There'
    console.log(helloStr);
}, 1000);


console.log(helloStr)