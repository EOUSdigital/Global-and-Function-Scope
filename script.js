//TODO 📚 Module 4 - Lesson 04 Global and Function Scope

//TODO  🧠 STEP 1: Explore & Practice — Global and Function Scope

//* 🎯 Objective
// 🔰 Help students understand the difference between global and function scope, and practice using them through simple examples and guided questions.

//* 📘 Key Concepts:

//? 🔹 Global Scope
//  • A variable declared outside of any function.
//  • Accessible from anywhere in your code (except inside block-limited scopes like let/const in {} blocks).

let globalVar = "I am global";                          //  global variable

function show() {
    console.log(globalVar);                             //  accessible here
}

//? 🔹 Function Scope
//  A variable declared inside a function is only accessible within that function.

function testScope() {
    let localVar = "I live inside the function";        //  local variable
    console.log(localVar);                              // works here
}

// console.log(localVar);                                  // ❌ ReferenceError because cannot be read outside of the function


//? 🧪 Guided Activities

//* ✅ Activity 1: Spot the Scope
//  “In the following code, identify which variables are globally scoped and which are function scoped.”

let title = "Developer";

function displayTitle() {
    let greeting = "Hello";
    console.log(greeting + " " + title);
}

//* Prompt:

//  1. Which variable is global?
//  2. Which one is function-scoped?
//  3. Where can greeting be accessed?

//! Answer

//  1. title is a global variable outside of the function.
//  2. greeting is a function-scoped variable.
//  3. greeting can be accessed only inside the function. If we access outside of the function, we will receive a ReferenceError.

//* ✅ Activity 2: Fix the Bug
//  “Why does this code fail? How would you fix it?”

function announce() {
    let message = "Launching!"
}

//! console.log(message);

//! Answer

//  The code fails because the console log is outside the function.
//  Console log must be moved inside the function.

function announce() {
    let message = "Launching!"
    console.log(message);
}

//? ✏️ Practice Task

//  Write a function that defines a local variable inside it and tries to access that variable outside the function. Observe and log the error message.

//! Answer

function localVar() {
    let insideVariable = [];
}

//!  console.log(insideVariable);                                //  Uncaught ReferenceError: insideVariable is not defined


//TODO  🌍 STEP 2: Real-World Examples — Global and Function Scope

//* 🎯 Objective:
//  Help students understand why scope matters in real projects, and how bad scope management can lead to bugs or security issues.

//? 📘 Example 1: Clashing Variables in a Web Page
//  🔹 Scenario: Imagine we are working on a large e-commerce site. Two separate components accidentally use the same variable name:

// Script for product page
let cart = [];

// Script for header
function updateHeader() {
    let cart = "MyCart";                                    //  function-scoped
    console.log(cart);                                      //  logs "MyCart"
}

console.log(cart);                                          //  logs []

//  ✅ The cart in updateHeader() is not the same as the global one — thanks to function scope.
//  ❌ If you forgot the let inside the function, it would overwrite the global cart and break the page.

//? 📘 Example 2: Exposing Sensitive Data
//  🔹 Scenario: We are building an authentication system.

function login() {
    let token = "secret-token";                             //  function-scoped
    console.log("User logged in.");
}

//! console.log(token);                                         //  ❌ ReferenceError

//  ✅ Function scope protects sensitive data.
//  ❌ Making token global would risk exposure to other scripts or browser dev tools.


//TODO  🔍 Guided Discussion Prompt

//  1. What might happen if the token were accidentally declared globally?
//  The token would be accessible from anywhere in the application — including other scripts or the browser console — which could expose sensitive user data or lead to security vulnerabilities.

//  2. How does function scope help you write more secure code?
//  Function scope limits access to variables so they can only be used inside that function. This helps protect sensitive data like passwords, tokens, or session info from being accessed or altered outside their intended use.

//  3. Why is it good practice to keep variables local when possible?
//  Local variables reduce the risk of name collisions, make your code easier to reason about, and prevent unintended interactions between different parts of your program. They also help maintain a clean and predictable execution context.


//TODO  🧪 Mini Coding Task: Token Exposure vs. Protection

//* 🎯 Objective:
//  See what happens when a token is declared globally vs. locally, and how scope affects access to sensitive data.

//? 🔧 Task Part 1: Expose the Token Globally
//  1. Create a login() function.
//  2. Inside it, assign a token without using let, const, or var.
//  3. After calling the function, log token from outside.

function login() {
    token = "global-token";                     //  ❌ no declaration keyword (let, const, var)
    console.log("User logged in.");
}

login();
//! console.log(token);                             //  What happens?

//  🔍 Observe: Can you access the token outside the function?
//  Yes, I can access the token outside the function. I can read the variable value.
//  By declaring token without let, const, or var, JavaScript implicitly attaches it to the global object (i.e., window in browsers). This is often called an implicit global — and it's a classic pitfall.

//? 🔧 Task Part 2: Protect the Token with Function Scope
//  1. Now update your login() function to use let when declaring token.
//  2. Try to access token from outside again.

function login() {
    let token ="local-token";                   //  ✅ function-scoped
    console.log("User logged in.");
}

login();

//! console.log(token);                             //  What happens now?

//  🔍 Observe: Do you still have access to the token outside the function?
//  No, I cannot access the token outside the function. ReferenceError: token is not defined.


//TODO  🟢 Step 3: Quiz Time — Global and Function Scope

//* 🎯 Goal:

//  ?   📝 Question 1
//  What is the main difference between global and function scope?
//  A. Global scope is faster to access than function scope
//  B. Variables in global scope can only be used in one file
//  C. Function-scoped variables are only accessible inside the function where they are defined
//  D. Global scope is created with `let` only

//! Answer: C   - Function-scoped variables are only accessible within the function where they are declared. This is the heart of the scope model in JavaScript.

//? 📝 Question 2
//  What will this code output?

let color = "blue";

function showColor() {
    let color = "red";
    console.log(color);
}

showColor();

//  A. blue
//  B. red
//  C. undefined
//  D. ReferenceError

//! Answer: B   - Inside the function, a new color variable shadows the global one. console.log(color) prints "red" from the local scope.

//? 📝 Question 3
//  Which of the following variables is "function-scoped"?

function example() {
    var x = 5;
}

//  A. x
//  B. example
//  C. 5
//  D. None of the above

//! Answer: A   - var x is function-scoped — it exists only inside the example() function.

//? 📝 Question 4
//  Which line would cause a ReferenceError?

function greet() {
    let message = "Hi";
}
// console.log(message);

//  A. `let message = "Hi";`
//  B. `function greet() { ... }`
//  C. `console.log(message);`
//  D. None of the above

//! Answer: C   - Only console.log(message); will throw the ReferenceError, because message is defined inside the greet() function and is not accessible outside of it.

//? 📝 Question 5
//  Why should you limit global variables?

//  A. They make your code faster
//  B. They prevent all bugs
//  C. They can be accessed or modified from anywhere, increasing risk
//  D. They are required to store secure data

//! Answer: C   - Global variables can be accessed and modified from anywhere, which makes your code prone to accidental overwrites and security issues.


//TODO  🛠️ Step 4: Project Challenge — *Global and Function Scope*

//* 🎯 Project Name: "Event Logger with Protected Data"

//  We will design a small program that logs user interaction events (like button clicks or form submissions) while keeping sensitive internal data "function-scoped and secure".

//? 📋 Challenge Requirements

//  1. Global Configuration
//  • Declare a global variable called `appName` with the value `"EventTracker"`.

//  2. Secure Token Generator (Function Scope)
//  • Create a function named `generateToken()` that:
//      - Declares a function-scoped variable called `token` with a value like `"abc123"`.
//      - Logs: `"Token generated for [appName]"`
//      - Does "not" allow access to `token` outside the function.

//  3. Event Logger Function
//  • Create a function called `logEvent(eventType)` that:
//      - Uses the global `appName`
//      - Logs: `"Event [eventType] recorded by [appName]"`

//  4. Test for Exposure
//  • Try accessing `token` from outside `generateToken()` and confirm that it throws a `ReferenceError`.

//* 🔍 Example Output

//  • Token generated for EventTracker
//  • Event click recorded by EventTracker
//  • ReferenceError: token is not defined


//? 🧠 Bonus (Optional):
//  • Add a second function `getAppName()` that returns the global variable.
//  • Inside `generateToken()`, use a nested function to simulate an internal log.

//! Solution

let appName = "EventTracker";

function generateToken() {
    let token = "abc123";
    console.log(`Token generated for ${appName}`);

    function nested() {
        console.log("This is a inner function.");
    }
}

generateToken();
console.log(token);                                     //  ❌ ReferenceError

function logEvent(eventType) {
    console.log(`Event ${eventType} recorded by ${appName}`);
}

//? Bonus

function getAppName() {
    return appName;
}

--------------------------------------------------------------

//TODO 🧩 Block Scope Challenge: "The Loop Leak"

//* 🎯 Goal:
//  Understand how var, let, and const behave inside blocks, like loops and conditionals.

//? 📘 Concept Overview — What is Block Scope?
//  🔹 A block is any code inside { ... }

//! Examples:

//  • if (true) { ... };
//  • for (...) { ... };
//  • while (...) { ... };

//  🔹 let and const are block-scoped
//  They live only inside the { } they are declared in.

//  🔹 var is function-scoped
//  It ignores blocks and lives through the entire function.

//?  🛠️ Your Mini Task: Explore the Difference
//  Try this code and observe the output:

if (true) {
    var x = "I was declared with var";
    let y = "I was declared let";
    const z = "I was declared const.";
}

console.log(x);                         //  What happens?
// The message will be logged because "var" is function-scoped, and will ignore blocks and live through the entire function.

//! console.log(y);                         //  What happens?
// The following message will receive "ReferenceError: y is not defined", because it is block-scoped and lives only inside the { } id declared in. 

//! console.log(z);                         //  What happens?
//  The following message will receive "ReferenceError: z is not defined", because it is block-scoped and lives only inside the { } id declared in. 

//* 🧠 Recap:
//? Variable            Declared With           Scope Type          Accessible Outside Block?           Result
//  x                   var                     Function Scope      ✅ Yes                              "I was declared with var"
//  y                   let                     Block Scope         ❌ No                               ReferenceError
//  z                   const                   Block Scope         ❌ No                               ReferenceError

//! let and const are safer in modern JavaScript — especially in loops or conditional logic.

--------------------------------------------------------------

    //TODO  🧠 Loop Scope & the Closure Trap

//* 🎯 Objective:
//  Understand why using var inside a loop with delayed execution (like setTimeout) causes unexpected results — and how let solves it.

//? 📘 The Classic Problem: Using var in a Loop
//  Code run:

for (var  i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(`var i: ${i}`);
    }, 1000)
}

//? 💣 What Happens and Why?

//* 🔍 Expected:
//  var i: 1
//  var i: 2
//  var i: 3

//! ❌ Actual:
//  var i: 4
//  var i: 4
//  var i: 4

//? 🤯 Why?
//  • var is function-scoped, not block-scoped.
//  • By the time setTimeout runs, the loop has finished — and i is already 4.
//  All the functions share the same i, so they all log its final value.

//* ✅ Fixing It with let
//?  Correct version:

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(`let i: ${i}`);
    }, 1000);
}

//? ✔️ Output:

//  let i: 1
//  let i: 2
//  let i: 3

//* ✅ Why?
//  • let is block-scoped.
//  • Each loop iteration creates a new i, scoped only to that iteration inside of  function.
//  • Each setTimeout captures the correct version of i.

//* ✏️ Mini Reflection:
//  1. Why does var produce repeated values?
//  var produces repeated values because all the functions share the same "i".

//  2. Why does let solve this issue?
//  let solve this issue because it is block-scoped and each loop iteration creates a new i, scoped only to that iteration inside the function.

//  3. Where might this bug show up in real-world apps?
//  This bug can come up in a countdown project. Launching a rocket, timing a race, and similar.

//* ✅ Summary of Your Mini Reflection:
//  • var causes the issue because its scope is shared across all loop iterations.
//  • let fixes the problem by creating a new binding for each iteration.
//  • It was correctly identified that asynchronous behavior (like a countdown) is where this bug becomes especially noticeable.

--------------------------------------------------------------

//TODO  🧩 Debugging Task — Fix the Countdown Bug

//  ❌ Broken Code (Using var) - a countdown script meant to log:

Countdown: 3
Countdown: 2
Countdown: 1

// But it does not work as expected:

for (var i = 3; i > 0; i--) {
    setTimeout(function () {
        console.log(`Countdown: ${i}`);
    }, 1000);
}

//* 🧠 Task:
//  1. Run it or read the logic.
//  2. Explain what it actually logs and why.
//  3. Fix it using let so it counts down correctly.

//! Answer

//  1. I run the code in the developer browser console.
//  2. The original code logs "Countdown: 0" three times, because var leaked i outside the loop block, and all setTimeout calls saw the final value: 0.
//  3. Fixed code.

for (let i = 3; i > 0; i--) {
    setTimeout(function () {
        console.log(`Countdown: ${i}`);
    }, 1000);
}

--------------------------------------------------------------








