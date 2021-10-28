function narcissistic(value) {
  let result = 0;
  let valToArr = value.toString().split("");
  let length = valToArr.length;
  for (let dig of valToArr) {
    dig = Number(dig);
    result+=(dig**length);
    
  }
  if (result==value) {
    return true;
  }else {
    return false;
  }
}
