// Advanced Scope: Closure
function createFunction () {
    function multiplyBy2 (num) {
        return num * 2
    }
    return multiplyBy2
}

const generatedFunc = createFunction()
const result = generatedFunc(3)

function outer () {
    let counter = 0
    function incrementCounter () {
        counter++
    }
    return incrementCounter
}
const myNewFunction = outer()
myNewFunction()
myNewFunction()

// Closure exercises
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
    function sayHello () {
        console.log('hello')
    }
    return sayHello
}

/*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    function print () {
        console.log(input)
    }
    return print
}

/*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
        counter ++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX (x) {
    let some = 0
    return input => some = input + x
}

/*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
    let some = 0
    return input => {
        return some === 0 ? some = func(input) : some
    }
}

/*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    return () => {
        count--
        return count === 0 ? func() : null
    }
}

/*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
    setTimeout(func(), wait)
}


// CHALLENGE 7
function rollCall(names) {
    let count = 0
    return () => {
        if (count === names.length) {
            console.log('Everyone accounted for')
        } else {
            console.log(names[count])
        }
        count++
    }
}

/*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
    const obj = {}
    let value = 0
    return input => {
        if (input === magicWord) {
            return obj
        } else {
            value = func(input)
            obj[input] = value
            return value
        }
    }
}

/*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
    let size = -1
    return () => {
        size++
        if (size === array.length) {
            size = 0
        }
        return array[size]
    }
}

/*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
    return input => func(arg, input)
}

/*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
    return input => {
        return {
            date: Date(),
            output: func(input)
        }
    }
}

/*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor () {
    const obj = {}
    return (str1, str2) => {
        if (str2 === undefined || str2 === null) {
            for (key in obj) {
                str1 = str1.replace(key, obj[key])
            }
            return str1
        } else {
            obj[str1] = str2
        }
    }
}

/*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'penguins');
changeScene('quick', 'very slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
    return {
        getSecret () {
            return secret
        },
        setSecret (some) {
            secret = some
        }
    }
}

/*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
    let count = 0
    return () => ++count
}

/*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
    return () => {
        num--
        if (num > 0) {
            return 'click'
        } else if (num === 0) {
            return 'bang'
        } else {
            return 'reload to play again'
        }
    }
}

/*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
    let result = 0
    let count = 0
    let ave = 0
    return (arg) => {
        if (arg === undefined || arg === null) {
            return ave
        }
        result += arg
        count++
        ave = result / count
        return ave
    }
}

/*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
    return func => { // callback
        let yes = false
        arrOfTests.forEach(e => {
            for (let i = 0; i < e.length - 1; i++) {
                if (func(e[i]) === e[i + 1]) yes = true
            }
        })
        return yes
    }
}

/*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
    const arr = []
    return str => {
        if (str !== 'undo') {
            if (arr.length < limit) {
                arr.push(str)
            } else {
                arr.shift() // delete element from front side | //unshift() -> put new el in array from front
                arr.push(str)
            }
            return `${str} done`
        } else {
            if (arr.length === 0) {
                return 'nothing to undo'
            }
            let temp = arr[arr.length - 1]
            arr.pop() // delete element from back of arr
            return `${temp} undone`
        }
    }
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
    let count = 0
    return (arg1, arg2) => { // Dealer function
        let temp = 0
        let yes = false
        return () => { // Player function
            if (temp === 0) {
                temp = arg1 + arg2
                return temp
            } else {
                temp += array[count]
                if (temp <= 21) {
                    count++
                    return temp
                } else {
                    if (!yes) {
                        yes = true
                        count++
                        return 'bust'
                    }
                    return 'you are done!'
                }
            }
        }
    }
}

/*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

