// reverse a string

function reverseString(str) {
  let rev = str.split("").reverse().join("");
  return str == rev;
}
// console.log(reverseString("nitin"));

// checkPalindrome

function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }

    return true;
  }
}

// console.log(checkPalindrome("jayant"));

// First non-repeating character
// Example: aabbccddeefg → f

function nonRepeating(str) {
  let obj = {};

  for (let ch of str) {
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }

  for (let [key, val] of Object.entries(obj)) {
    if (val === 1) {
      return key;
    }
  }
}
// console.log(nonRepeating("aabbccjddeefg"));

//  Count vowels
// Example: beautiful → 5

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("beautifulei"));

//  Longest substring without repeating characters
// Example: abcabcbb → abc

function longestSubstring(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr.push(str.slice(i, j));
    }
  }
  return arr;
}

//  Check anagram
// Example: listen,silent → true

function anagram(str, str2) {
  let rev = str.split("").sort().join("");
  let strr = str2.split("").sort().join("");

  return rev === strr;
}
// console.log(anagram("naman", "manan"));

// Convert string to integer
// Example: 1234 → 1234

function stringInteger(str) {
  return Number(str);
}
// console.log(stringInteger("1234"));

// console.log(Number("123abc"));
// console.log(parseInt("123abc"));

// Capitalize first letter each word
// Example: hello world → Hello World

function capitalize(str) {
  //   let arr = str.split(" ");

  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  //   }

  //   return arr.join(" ");

  // second approach
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(capitalize("hello world"));

//  Reverse words in sentence
// Example: hello world → world hello

function reverseWords(str) {
  let rev = str.split(" ").reverse().join(" ");
  return rev;
}
// console.log(reverseWords("hello world"));

// Only digits
// Example: 12345 → true

function onlyDigits(str) {
  return typeof str === "number";
}
// console.log(onlyDigits(12345));

//  * Remove non-alpha chars
// Example: abc123!@# → abc

function nonAlpha(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      res += str[i];
    }
  }
  return res;
}

// console.log(nonAlpha("Aabc123!@#"));

function validPalindrome(str) {
  let ch = "";
  for (let c of str.toLowerCase()) {
    if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
      ch += c;
    }
  }

  let i = 0;
  let j = ch.length - 1;

  while (i <= j) {
    if (ch[i] == ch[j]) {
      i++;
      j--;
    } else {
      return "Not palindrome";
    }
  }
  return "palindrome";
  //   console.log(str);
}
// console.log(validPalindrome("A man, a plan, a canal: Panama"));

//  String compression
// Example: aabcccccaaa → a2b1c5a3

function stringCompression(str) {
  let result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      result.push(str[i]);
      if (count > 1) {
        result.push(count);
      }
      count = 1;
    }
  }
  return result.join("");
}

// console.log(stringCompression("abbbccd"));

//  Implement indexOf
// Example: hello,l → 2

function idxOf(str, wordd) {
  let idx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == wordd) {
      idx = i;
      return idx;
    }
  }
  return idx;
}
console.log(idxOf("hello", "o"));
