// sort alphabetically the words with equal length

const getNumberOfLines = () => {
  var amountOfLines = parseInt(prompt('entre o numero de linhas'));

  if (amountOfLines < 1 && amountOfLines > 50) {
    return getNumberOfLines();
  }
  
  return amountOfLines;
}

const getLine = () => {
  var line = prompt('escreva as palavras');
  
  if (1 < line.length && line.length > 50) {
    return getLine();
  }
  
  return line;
}

const getLines = numberOfLines => {
  let lines = [];
  
  for(let i=0; i < numberOfLines; i++) {
    lines.push(getLine());
  }
  
  return lines;
}

const orderArray = arrayOfLines => {
  let newArray = [];
  
  for(let i=0; i < arrayOfLines.length; i++) {
    let line = arrayOfLines[i];
    let separatedLine = line.split(' ');
    let sortedWords = [];
    
    for(let word of separatedLine) {
      
      if (sortedWords.length <= 0) {
        sortedWords.push(word);
      } else {
        sortedWords.forEach((item, index, array) => {
          if (word.length > item.length && !sortedWords.includes(word)) {
            sortedWords.splice(index, 0, word);
          }
          
          if (!sortedWords.includes(word) && index == sortedWords.length - 1) {
            sortedWords.push(word);
          }
        });
      }
      
      if (sortedWords.toString() === separatedLine.toString()) {
            sortedWords.sort();
      }
      
    }
    
    newArray.push(sortedWords.join(' '));
    
  }
  
  return newArray;
}

let numberOfLines = getNumberOfLines();
let lines = getLines(numberOfLines);
let sortedLines = orderArray(lines);

console.log(sortedLines, lines);
