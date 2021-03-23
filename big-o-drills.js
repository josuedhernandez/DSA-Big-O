/*
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a 
playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the 
same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate 
for my golden. Someone yells - "I do, be happy to bring him over"
A: Constant Time O(1)

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a 
playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same 
breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you
ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
A: Linear time O(n)
*/

// What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// A: Constant time. No matter how big the input is it will be a constant time to check and divide the value.
// O(1)

// What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
// A: Polynomial O(n^2), it is a double nested loop.

// What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
// A: Linear O(n) the time with increase proportional to the input in a lienar way.

// What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
// A: Linear O(n) worst case will have to loop thru the lenght of the array.

// What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
// A: Polynomial O(n^2), it is a double nested loop.

// What does the following algorithm do? What is its runtime complexity? Explain your answer
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
// A: Fibonacci Series O(n)

// Assume that the input array is always sorted. What is the Big O of the following algorithm? 
// Explain your answer
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// A: Logarithmic O(log(n)). Each loops cuts the problem in half.

// What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// A: Constant O(1). One operation not matter the size of the array.

