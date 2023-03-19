// Whatever done till now was synchronous code
// Code is executed one by one, like if:-
// a()
// b()
// In the above, first function a is executed first and then only then b is executed
// We can say that there is a single thread/stack, on which code is exectured one by one.
// But if we have multiple threads/stack, we can perform multiple tasks at once.
// This would be called async programming.
// JS is single threaded language, we can't do async using normal multi threading.
// Merge sort algo would benefit from parellel programming, as the two sorted halves would never depend on each other.

// Data requests to the server are done asynchronously by the client.
// There are onl 2 functions that can make a program async:-
// setTimeout()
// setInterval()

setTimeout(function() {
    console.log("timeover");
}, 1000);

// Time can exceed this 1000, but rarely happens
// How this works?
// What JS does is it tells the Web API(browser) to tell it when some data has arrived. It will then go and do the task.
// By that time, JS does whatever else it can do.

// JS maintains its own stack.
// setTimeout will handover the timing to to web API. 
// When web Api will be done with the time, the task will be shifted to callback queue
// The event loop is a function, which tells when the stack will be clear, functions from callback queue would be shifted 
// to JS stack.

// Web API and node(framework) are made from C++, which already supports multithreading. That's why they'are able to handle
// multithreading. We can push more than one thread onto the browser or node.

// latentflip.com -> Visualization of  the above



