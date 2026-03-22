function subStrpalindrome(str) {
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subStr = str.substring(i, j);
      let reversed = subStr.split("").reverse().join("");

      if (subStr === reversed && subStr.length > 1) {
        ans.push(subStr);
      }
    }
  }
  console.log(ans);
}

subStrpalindrome("abaab");
