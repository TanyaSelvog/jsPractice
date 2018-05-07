
/*function that reverses the order of
characters in the word */

function reverseWord(w) {
  var reverseWord = "";
  //loops over the character

  for (var i = w.length - 1; i >= 0; i-- ){
    // add characters to a word
    reverseWord = reverseWord.concat(w[i]);
  }


return reverseWord;
}
