// Destructuring
// Array
function data () {
    return [1,2,,3,4,5]
}
// var tmp = data()
// var first = tmp[0]
// var second = tmp[1] !== undefined ? tmp[1] : 10
// var third = tmp[2]
// var fourth = tmp.slice(3)
var tmp
var [
    first,
    ,
    second = 2,
    third,
    ...fourth // rest operator
] = tmp = data() || [] // equivalent from top commented code


var x = 10
var y = 20
// {
//     let tmp = x
//     x = y
//     y = tmp
// }
[y,x] = [x,y]
console.log(y)

function data ([
    first = 10,
    second = 20,
    third = 30
] = []) {
}

// Object
function data () {
    return { a: 1, b: 2, c: 3, d: 4 }
}
// var tmp = data()
// var first = tmp.a
// var second = tmp.b
// var third = tmp.c
var {
    a: first = 42,
    b: second,
    c: {
        d,
        e
    } = {},
    ...third // would be object
} = data() || {} // equivalent from top commented code

function data ({
    a,
    b
} = {}, x){

}

var obj = {
    a: 1,
    b: 2,
    c: 3
}

var {
    a,
    b: b,
    b: w,
    c
} = obj

// flat and flatMap
var nestedArray = [
    1, [2,3], [[]], [4, [5]], 6
]
nestedArray.flat()

[1,2,3].map(function tuples(v) {
    return [v*2, String(v*2)]
})

[1,2,3].map(function tuples(v) {
    return [v*2, String(v*2)]
}).flat()

[1,2,3].flatMap(function tuples(v) {
    return [v*2, String(v*2)]
})

// Iterators & Generators
var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator](){
        for (let key of Object.keys(this)) {
            yield this[key]
        }
    }
}
console.log([ ...obj ])