// Alex just got a new hula hoop, he loves it but feela discouraged because his little brother is better than him. Write a program where
// Alex can Input(n) how many times the hoop goes round and it will return him an encouraging Message . If Alex gets 10 or more hoops,
// return the string "Great, now move on to tricks". if he doesnt get 10 hoops, return the string "Keep at it until you get it "

// Reviewed
function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
console.log(hoopCount(9));
