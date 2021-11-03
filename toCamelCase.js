function toCamelCase(str){
  if (str=='') {
    return '';
  }
 let sth =  str.includes('-') == true ? str.split('-') : str.split('_')
 let result = ''
  sth.forEach( word => {
      word = word[0].toUpperCase() + word.substring(1)
   result+=word
  })
  if (str[0].toLowerCase()==str[0]) {
    result = result[0].toLowerCase() + result.substring(1)
  }
  return result;
}
