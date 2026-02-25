/*setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");*/

const start = function()
{
    console.log("Using anonymous function");
};

start();

setTimeout(function()
    {
    console.log("Demostrating the anonymous callbacks");
    }, 2000);

const start2 = () => 
    {
        console.log("Using arrow function");
    }

start2();

setTimeout(() => 
    {
        console.log("Demostrating arrow callback");
    }, 2000)
