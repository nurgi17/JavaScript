var game = {}
game.murderer = '??'
game['weapons'] = [
    { type: 'lasers', location: 'lab' },
    { type: 'angry cats', ... }, 
    { type: 'dish soap', ... }
]
game.name = []
game.name[0] = 'Miss Scarlet'
game.name.push('Mr. Green')
['Miss Scarlet', 'Mr. Green']

// ES6 Destructuring -----------------------
const [first, second] = [true, false]
const {name, weapon, room} = { 
    'name': 'Rusty',
    'room': 'kitchen',
    'weapon': 'candlestick'
}
// Combine with spread/rest operator
var [a, ...b] = [1,2,3]
console.log(a,b)

// Swap variables easily without temp
var a = 1, b = 2
// var temp = a
// a = b
// b = temp
[b, a] = [a, b]
console.log(a, b)

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3,4], 5], 6]]] // Don't use like this!!!
console.log('a', a, 'b', b, 'c', c, 'd', d)

// ES6 Destructuring End--------------------

const game = {
    suspects: [
      {
        name: 'Rusty',
        color: 'orange'
      }, 
      {
        name: 'Miss Scarlet',
        color: 'red'
      }
    ]
}
var [color1, color2] = [game.suspects[0].color, game.suspects[1].color]
var [{color: firstColor}, {color: secondColor}] = game.suspects
console.log(firstColor, secondColor)

var gameLoop = function () {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log('outer loop')
        for (let key in game.suspects[i]) {
            console.log('inner loop')
            if (game.suspects[i][key] === 'Rusty') {
                console.log('Found \'em !')
            } else {
                console.log('next time')
            }
        }
    }
}
gameLoop()

// Suspect objects
function createSuspectObjects (name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak () {
            console.log('My name is ' + name)
        }
    }
}
var suspects = ['Mrs. Scarlet', 'Colonel Mustard', 'Mr. White']
var suspectList = []
var x = createSuspectObjects(suspects[0])
console.log(x.speak())
console.log(suspectList)

// Looping with _.each -> implementing
var _ = {}
_.each = function(list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list)
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list)
        }
    }
}

_.each(['sally', 'georgie', 'porgie'], function(value, index, list) {
    if (list[index + 1]) {
        console.log(value, 'younger than', list[index + 1])
    } else {
        console.log(value, 'oldest one in list')
    }
})

// _.map() -> implementing with _.each()
_.map = function (list, callback) {
    var storage = []
    // for (var i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list))
    // }
    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list))
    })
    return storage
}
var newArray = _.map([1,2,3], function(val) {
    return val + 1
})
console.log(newArray)

// .filter() -> implementing with .each()
_.filter = function(arr, cb) {
    var newArray = []
    _.each(arr, function(v, i, arr){
        if (cb(v, i, arr)) {
            newArray.push(v)
        }
    })
    return newArray
}

var arr1 = _.filter([1,2,3,4], function(val){
    return val % 2 !== 0
})
console.log(arr1)

// _.eachRight() -> implementing
// _.reduce() -> implementing
const _ = {}
_.reduce = function(list, cb, initial) {
    let memo = initial
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0]
        } else {
            memo = cb(list[i], memo)
        }
    }
    return memo
}
var result = _.reduce([2,3,5], (v, sum) => v + sum)
console.log(result)
