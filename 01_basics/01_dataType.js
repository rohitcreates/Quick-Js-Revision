"use strict"; // treat all JS code as newer version

let js = 23; // js is now number
console.log(typeof js);

js = "JavaScript"; // js is now String
console.log(typeof js);

js = true; // js is now boolean
console.log(typeof js);

js = {}; // js is now object
console.log(typeof js);

js = []; // js is now array
console.log(typeof js);

js = ""; // js is now undifined
console.log(typeof js);

js = null; // js is now null
console.log(typeof js);

js = 1234567890123456789012345678901234567890n; // BigInt
console.log(typeof js);

js = Symbol('Id'); // js is now Symbol
console.log(typeof js);

