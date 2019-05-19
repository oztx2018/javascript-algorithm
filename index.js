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
    var arrSort = arr.sort();
    var arrFirstElement = arr[0];
    var arrLastElement = arrSort[arrSort.length-1];
    var arrFirstElementLength = arrFirstElement.length; 
    var i = 0; 
    while (i < arrFirstElementLength && arrFirstElement.charAt(i) === arrLastElement.charAt(i)){
        i++;
    }
    console.log(arrFirstElement.substring(0,i));
};

var x = ["internetly", "internet", "internets"];

findLongestSubstring(x);
 


 





