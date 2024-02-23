/*Problem 1

function isPowerOfTwo(n) 
//     { 
//         if (n == 0) 
//             return 0; 
//         while (n%2 == 0) { 
//             n = n/2; 
//         } 
//         return n===1; 
//     }  
     
// isPowerOfTwo(25) ? console.log("Yes") : console.log("No");   //No
// isPowerOfTwo(64) ? console.log("Yes") : console.log("No");  //Yes
*/


/*Problem 2

function twoSum(nums, target) {
  
    const hash = {};                              
    for (let i = 0; i < nums.length; i++) {           //First, we initialize a dictionary named hash.  
      const diff = target - nums[i];                 //Then we iterate and check if there is an element in the dictionary
      if (diff in hash) {                           //that with the element at the current index, sums up to target
        return [hash[diff], i];
      }
      hash[nums[i]] = i;
    }
    return []
    }
  
  console.log(twoSum([15, 7, 11, 2],9))       //output: [1,3]
  console.log(twoSum([3, 2, 4],10))          //output: []
*/


/*Problem 3
function isPalindrome(x) {
  let med = 0;                           //Two variables med and temp are initialized. 
  let temp = x;                         //med is set to 0, and temp is assigned the value of x. 
                                       //These variables are used to store intermediate and original values of x respectively.

  while(x > 0)                       //This initiates a while loop. The loop condition checks if x is greater than 0.
  {
      med = med*10 + x%10;         //This line appends the last digit of x to med by multiplying med by 10 and adding the remainder of x divided by 10.
      x = Math.floor(x/10);       //This updates x by removing its last digit (using integer division).
  }
  if(med == temp)                //After the loop terminates, the code checks if med
  {                             //(which now contains the reverse of x) is equal to temp (the original value of x).
      return true;             
  }                            // Depending on the result of the comparison, the function returns true if x is a palindrome and false otherwise.
  return false
};

isPalindrome(121) ? console.log("Yes") : console.log("No");    //exit: Yes
isPalindrome(-121) ? console.log("Yes") : console.log("No");   //exit: No
*/


/*Problem 4
const isValid = (s) => {
  if (s.length % 2 !== 0) return false; 

  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

isValid("[") ? console.log("True") : console.log("False")         //False
isValid("()") ? console.log("True") : console.log("False")        //True
isValid("()[]{}") ? console.log("True") : console.log("False")    //True
isValid("(}") ? console.log("True") : console.log("False")        //False
isValid("{(})") ? console.log("True") : console.log("False")      //False
isValid("{()}") ? console.log("True") : console.log("False")      //True  */


/*Problem 5
function removeDuplicates(arr, n)
{
    // Return, if array is empty
    // or contains a single element
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
 
    // Start traversing elements
    var j = 0;
    for (var i=0; i<n-1; i++)
 
        // If current element is not equal
        // to next element then store that
        // current element
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
 
    // Store the last element as whether
    // it is unique or repeated, it hasn't
    // stored previously
    temp[j++] = arr[n-1];
 
    // Modify original array
    for (var i=0; i<j; i++)
        arr[i] = temp[i];
 
    return j;
}
 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    var n = arr.length;
 
    // removeDuplicates() returns new size of
    // array.
    n = removeDuplicates(arr, n);
 
    // Print updated array
    for (var i=0; i<n; i++)
       console.log(arr[i]+" "); */


/*Problem 6

var removeElement = function (nums, val) {
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
      // If the element is not val
      if (nums[i] !== val) {
          nums[count++] = nums[i];
      }
  }
  return count;
};


console.log(removeElement([0,1,2,2,3,0,4,2],2))*/

 
/*Problem 7

const originalString = "Hello world";                 // Example string 
   
const targetSubstring = "world";                      // Target substring 
  
const regex = new RegExp(targetSubstring);            // Creating a regular expression dynamically 
  

const match = originalString.match(regex);           // Finding the index of the first occurrence  
                                                    // of the target substring    
  
if (match) { 
    const index = match.index; 
    
    console.log("Index of the first occurrence:", index);  
} else { 
    console.log("Substring not found."); 
}

//Output: Index of the first occurrence: 6   */


/*Problem 8

function find_index(arr, n, K)            // Function to find insert position of K
{
     for(let i = 0; i < n; i++)           // Traverse the array
      
        
        if (arr[i] == K)                 // If K is found
            return i;
  
     
        else if (arr[i] > K)            // If current array element exceeds K
            return i;
  
    return n;                          // If all elements are smaller  than K
}
 
// Driver code
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let K = 7;
  
console.log(find_index(arr, n, K));  //Exit: 4   */


/*Problem 9
function lengthOfLastWord(a)
{
    let len = 0;
 
    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
}
 
// Driver code
 
input = " Hello world ";
console.log("The length of last word is "+ lengthOfLastWord(input));

//Output: The length of last word is 5 */


/*Problem 10
var AddOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; --i) {
      ++digits[i];
      digits[i] %= 10;
      if (digits[i] != 0) {
          return digits;
      }
  }
  return [1, ...digits];
};


let digits = [ 1, 5, 5, 4 ]; 
AddOne(digits); 

console.log(digits)   //Output: [ 1, 5, 5, 5 ] */