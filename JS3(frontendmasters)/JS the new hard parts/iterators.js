// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0
  for (let i of arr) {
    sum += i
  }
  return sum

}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let i = 0
  function iterator () {
    const e = arr[i]
    i++
    return e
  }
  return iterator
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  let i = 0
  const iterator = {
    next: () => {
			const e = arr[i]
      i++
      return e
    }
  }
  return iterator
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  let sum = 0
  let iterator = nextIterator(arr)
  let next = iterator.next()
  while(next) {
		sum += next
    next = iterator.next()
  }
  return sum
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  let setIterator = set.values()
  const iterator = {
    next: () => {
      var next = setIterator.next()
      return next['value']
    }
  }
  return iterator
}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  let i = 0
  const iterator = {
    next: () => {
      const e = [i, arr[i]]
      i++
      return e
    }
  }
  return iterator

}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  let i = 0
  const split = this.str.split(' ')
  return {
    next: () => {
      if (i < split.length) {
        const value = split[i]
        i++
        return {value: value, done: false} 
      } else {
        return {done: true}
      }
    }
  }
}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
    let i = 0
    let e
	const iterator = {
    sentence: () => {
        if (i === 0) {
            e = array[i] + ' the first'
		    i++
            return e
        } else {
            e = array[i] + ' was found after index ' + (i-1)
            i++
            return e
        }
    }
    }
    return iterator
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {


}

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");


