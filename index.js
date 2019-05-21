// Check Prime Number. Prime numbers are the numbers can divide by itself or 1. We need to use while looop increased ++;

function checkPrime(value){
    for(var i=2; i<value; i++){
        if( value % i === 0){
            return false;
        }
        else {
            return true;
        }
    }
}

// Alternative way for Prime Numbers Check;

function checkPrimeNumber(n) {
    if (n === 1){
        return false
    } else if (n === 2) {
        return true
    } else {
        for (var i=2; i<n; i++) {
            if( n % i === 0){
                return false
            } else {
                return true;
            }
        }
    }
}

console.log(checkPrimeNumber(137));


//Find the number is odd or even
function oddOrEven (number) {
    var divider = 2;
    if (number % divider === 0 ){
        console.log("This is a even number")
    }
    else {
        console.log("This is a odd number")
    }
}


// Words that start with vovwels

function vowelStartedWord(str) {
    var vowels = '^[aieouAIEOU].*'; 
    var matched = str.match(vowels);
    if(matched) {
        console.log("This word starts with a vowel")
    } else {
        console.log("This word doesn't start with vowel")
    }
}




//In a JavaScript array, find the longest common substring  of all array elements.

// Longest Substring 

function findLongestSubstring(arr) {
    // sort the letters
    var arrSort = arr.sort();
    // get first element
    var arrFirstElement = arr[0];
    // get last element
    var arrLastElement = arrSort[arrSort.length-1];
    // get first element lengt 
    var arrFirstElementLength = arrFirstElement.length; 
    var i = 0; 
    while (i < arrFirstElementLength && arrFirstElement.charAt(i) === arrLastElement.charAt(i)){
        i++;
    }
    console.log(arrFirstElement.substring(0,i));
};

var x = ["inter", "internet", "internets"];
var y = ["go", "going", "gone"];

console.log(findLongestSubstring(y));
 
/*Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */

var today = new Date(); 
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is: " + dayList[day] + ".");

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds(); 
var prepand = (hours >= 12)? " PM" : "AM"; 
console.log("Current time is :" + hours + " " + prepand + " :" + minutes + ": " + seconds )


// Alternative way 

function todaysDate() {
    var today = new Date();
    var day = today.getDay(); 
    var dayList =  ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log('Today is : ' + dayList[day]+ " .");
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds(); 
    var prepand = (hours >= 12)? " PM" : " AM";
    console.log("Current Time is : " + hours + " " + prepand + ": " + minutes+ " "+ seconds );
 }

todaysDate();

// Write a function that prints current window content 
function printWindow() {
    window.print();
}

/*Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

var today = new Date();
var mm = today.getMonth();
var dd = today.getDay();
var yyyy = today.getFullYear(); 

console.log(mm +"-" + dd +"-" + yyyy); 

//Calculate a triange area

function calculateTirangleArea(base,height,side) {
    return ((base*height)*side)/2;
}

//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}




