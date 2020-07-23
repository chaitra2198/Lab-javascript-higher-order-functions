// here write  the answer 
//function 1:
function slice() {
    var modifiedFood = [
      "pizza",
      "burger",
      " fingerChips",
      "donuts",
      "springRoll",
    ];
    modifiedFood.slice(1, 4);
    console.log(modifiedFood);
  }


//function 2:
function splice() {
    var modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    modifiedFood.splice(2, 0, "noodles", "icecream");
    console.log(modifiedFood);                                         // inserts at index 1
    
  }


  //function 3:
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  function isEven() {
    var arr = [12, 324, 213, 4, 2, 3, 45, 4234];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        // document.writeln(arr[i] + "<br />");
        console.log(arr[i]);
      }
    }
  }



var myArray1 = [2, 3];
//Function #3: Filterconst numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArr) {
    let evenNum = numberArr.filter(function (num) {
        return num % 2 == 0;
    });
    return evenNum;
}
console.log("Even Number is=> " + isEven(numberArray));
//3.1 Prime Number
myArray = [12, 324, 213, 4, 2, 3, 45, 4232];

function prime(arr) {
    return "The prime numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}

var myArray1 = [2, 3];


// Function #4: Reject
function nonPrime(arr) {

    return "The even numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= myArray1.length; i++) {
            if (number % i === 0) true;
        }
        return false;
    });
}
console.log(prime(myArray));
console.log(nonPrime(myArray1));

  
//function 5:
function isEven(num) {
  return num.filter((n) => n % 2 == 0);
}
console.log("Even Number by Lambda Expression: " + isEven(numberArray));



//function 6:Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers() {
  const map1 = myArray.map((x) => x * x);
  console.log(map1);
}



//Function 7: Reduce
const numbers = [2, 3, 5, 10];
function multiply(myArray) {
  return myArray.reduce(function (initial, item) {
    return initial * item;
  }, 1);
}
console.log("Multiplication=>" + multiply(numbers));
  
  
  