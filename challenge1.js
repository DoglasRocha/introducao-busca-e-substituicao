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

const orderArrayByLength = line => {
  let separatedLine = line.split(' ');
  let sortedWordsByLength = [];
  
  for(let word of separatedLine) {
      
    if (sortedWordsByLength.length <= 0) {
      sortedWordsByLength.push(word);
        
    } else {
      sortedWordsByLength.forEach((item, index, array) => {
        if (word.length > item.length && !sortedWordsByLength.includes(word)) {
          sortedWordsByLength.splice(index, 0, word);
        }
        
        if (!sortedWordsByLength.includes(word) && index === sortedWordsByLength.length - 1) {
          sortedWordsByLength.push(word);
        }
      });
    }
  }
  
  return sortedWordsByLength.join(' ');
}

const orderArrayAlphabetically = sortedWordsByLength => {
  let separatedLine = sortedWordsByLength.split(' ');
  let lengths = [];
  
  separatedLine.forEach((item) => lengths.push(item.length));
  let nonRepeatedLengths = [...new Set(lengths)];
  let sortedAlphabeticallyWords = [];
  
  nonRepeatedLengths.forEach((length) => {
    let sortedItem = separatedLine.filter(item => item.length === length);
	sortedItem.sort();
    sortedAlphabeticallyWords = sortedAlphabeticallyWords.concat(sortedItem);
	debugger;
  });
  return sortedAlphabeticallyWords.join(' ');
  
}

const orderArray = arrayOfLines => {
  let newArray = [];
  
  for(let i=0; i < arrayOfLines.length; i++) {
    let line = arrayOfLines[i];
    let sortedWordsByLength = orderArrayByLength(line);
    let sortedWordsByLengthAndAlphabetically = orderArrayAlphabetically(sortedWordsByLength);
    newArray.push(sortedWordsByLengthAndAlphabetically);
    
  }
  
  return newArray;
}

let numberOfLines = getNumberOfLines();
let lines = getLines(numberOfLines);
let sortedLines = orderArray(lines);

sortedLines.forEach(item => console.log(item));
