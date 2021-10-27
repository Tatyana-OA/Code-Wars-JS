function isIsogram(str){
  let isIsograms = true;
  let strToArray = str.split('');
   console.log(strToArray)
  
  for (let i=0; i<strToArray.length; i++) {
    let control = strToArray[i];
     for (let j=i+1; j<strToArray.length; j++) {
       let test = strToArray[j];
       if (control.toLowerCase()==test.toLowerCase()) {
         isIsograms=false;
       }
     }
  }
  
  
  return isIsograms;
}
