// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
//     it("short description of what fxn should do", () => {
//       expect(functionName(input)).toEqual(output)
//     })
//   } )

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
    it("returns the fibonacci with the given length", () => {
      expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
      expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
});
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const fibonacci = (length) => {
    let newArr = [1, 1]
    for (let i = 2; i < length; i++) {
    newArr.push(newArr[i - 1] + newArr[i - 2])
    }
    return newArr;
}
// Pseudo code:
    //create fibinacci function that takes length as a parameter
    // create new array with the first 2 numbers of the fibonacci sequence 
    // create a for loop that starts at index 2 because the first 2 numbers are provided in my array(newArr)
    // line 37 is pushing the fibonacci number to the new array
    // then we are returning the new array with the fibonacci numbers
    
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("totalVotes", () => {
    it("returns the total of the upvotes and downvotes", () => {
        expect(totalVotes({ upVotes: 13, downVotes: 2 })).toEqual(11);
        expect(totalVotes({ upVotes: 2, downVotes: 33 })).toEqual(-31);
    });
});
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const totalVotes = (votes) => {
    return votes.upVotes - votes.downVotes
}
// Pseudo code:
    // create a function that takes in votes as a parameter and returns 
    // the total votes (upvotes - downvotes)