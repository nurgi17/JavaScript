const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];
const notInRoom = suspect => {
    const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
        if (room === false) memo.push(room)
    }, [])
    return emptyRooms
}
const notInRooms = _.map(newDevelopment, notInRoom)
const solution = _.intersection(...notInRooms)

// Advanced Scope: Closure
const myAlert = () => {
    const x = 'Help! I think I found a clue!'
    const alerter = () => {
        console.log(x)
    }
    setTimeout(alerter, 1000)
    console.log('what happens first? this log or the alert') // first would be console.log()
}
myAlert()

// Currying
const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2)
        }
    }
}
var abc = (a,b) => [a,b]
var curried = curry(abc)
console.log(curried(1)(2))

// Compose
const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg)
        return fn(result)
    }
}

const consider = (name) => {
    return `I think it could be... ${name}`
}
const exclaim = statement => {
    return `${statement.toUpperCase()}`
}
const blame = compose(consider, exclaim)
console.log(blame('you'))