// Functions
// Projecting
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    }
]

var names = videoData.filter(p => p.present).map(n => n.name)
console.log(names)

// spread operator
const createTuple = (a, b, c, ...d) => { // ...d is spread operator (parameters)
    console.log(arguments) // pay attention what arguments passed to function
    return [[a,c], [b,d]]
}
console.log(createTuple('it', 'be', 'could', 'anyone', 'no one')) // -> arguments

// Default parameters
const createTuple1 = (a, b = 2) => {
    // b = b || 2 // default parameters in ES5
    console.log(arguments)
    return a + b
}
console.log(createTuple1(3))

// array-like object
const constructorAttr = function() {
    const arr = Array.from(arguments) //(.from = prototype.slice.call -> equal thing) take all arguments and return array with this arguments
    arr.push('the billiards room?') // push new value in array
    return arr.join(' ') // join all of the values in array in one string with space ' '
}
console.log(constructorAttr('was', 'it', 'in'))
// Implementing the from
const from = arr => {
    return Array.prototype.slice.call(arr)
}
// Functions are also objects
const add = (a, b) => a + b
add.example = 'test 1234'
console.log(add)

// Scope -----------------------------------------------------------------------------

// Callbacks -------------------------------------------------------------------------
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse()
}
ifElse(true, 
    () => { console.log(true) },
    () => { console.log(false) }
)

const increment = n => n + 1
const square  = n => n * n
const doMathSoIDontHaveTo = (n, func) => func(n)
doMathSoIDontHaveTo(5, square)
doMathSoIDontHaveTo(4, increment)
