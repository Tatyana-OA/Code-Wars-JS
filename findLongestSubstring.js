function strLength(str) {
    let strArr = ""
    
  str.split("").forEach(el=>{
      if (! strArr.includes(el) ) {
         strArr +=el 
          
      } else {
          return;
      }
  })
    if (! str.includes(strArr)) {
        for (let i=0; i<strArr.length; i++){
            let currentSubs = strArr.substring(i,strArr.length)
            let length = 0;
            if (str.includes(currentSubs)) {
               length = currentSubs.length;
               return length;
            }
        }
    } else {
        return strArr.length;
    }

}

console.log(strLength("abcabcbb")) 
console.log(strLength("bbbbb")) 
console.log(strLength("pwwkew")) 
