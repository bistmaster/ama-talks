let helloStr = 'Hello';

setTimeout(function () {
    helloStr = 'Hey There'
    console.log(helloStr);
}, 1000);

setTimeout(function () {
    helloStr = 'Hey There 1'
    console.log(helloStr);
}, 1000);

setTimeout(function () {
    helloStr = 'Hey There 2'
    console.log(helloStr);
}, 1000);

setTimeout(function () {
    helloStr = 'Hey There 5'
    console.log(helloStr);
}, 900);

console.log(helloStr)