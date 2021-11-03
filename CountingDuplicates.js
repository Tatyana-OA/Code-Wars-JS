function duplicateCount(text){
let resultArr = []
let duplicates = []
text.toLowerCase().split('').forEach(l=> ! resultArr.includes(l) ? resultArr.push(l) : duplicates.push(l) )
 return new Set(duplicates).size
}
