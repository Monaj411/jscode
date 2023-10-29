
// write a function that takes an array of words and smashes them together into a sentence and returns the setence. you can ignore any need to sanitize words or add punctuation, but you should add


function smash(word) {
    const smash = word.join('  ')
    return smash
  } 
  console.log(smash( ["I", "Love", "you"]))