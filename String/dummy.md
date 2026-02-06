let str = "jayant"
// for (let i = 0; i < str.length; i++){
// console.log(str[i])
// }

// Reverse the string
// let rev = ""
// for (let i = str.length; i >= 0; i--){
// rev += str.charAt(i)
// }
// console.log(rev)

// Palindrome

// let rev = ""
// for (let i = str.length; i >= 0; i--){
// rev += str.charAt(i)
// }
// if (rev == str) {
// console.log(`${str} is a Palindrome`)
// } else {
// console.log("Not a palindrome")
// }

// let i = 0, j = str.length - 1
// let isPalindrome = true
// while (i < j) {
// if (str.charAt(i) != str.charAt(j)) {
// isPalindrome = false
// break
// }
// i++
// j--
// }

// if (isPalindrome) console.log(`${str} is a palindrome`)
// else console.log(`${str} is not a palindrome`)

// let toggle = ""
// for (let i = 0; i < str.length - 1; i++){
// let ch = str.charCodeAt(i)

// if (ch >= 65 && ch <= 90) {
// toggle = toggle + String.fromCharCode(ch+32)
// } else if (ch >= 97 && ch <= 122) {
// toggle = toggle + String.fromCharCode(ch - 32)

// }
// }

// console.log(str)
// console.log(toggle)

// occurences of each character in a string
let arr = new Array(128).fill(0)

for (let i = 0; i < str.length ; i++){
let indx = str.charCodeAt(i)
arr[indx] = arr[indx]+1
}

for (let i = 0; i < arr.length; i++){
if (arr[i] > 0) {
console.log(String.fromCharCode(i) + " appears "+arr[i] + " times")
}
