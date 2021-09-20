// esta solução funciona na DIO, sendo necessário substituir o "prompt" pelo "gets"

const regex = new RegExp('^[a-zA-Z0-9 ]{1,50}$i');

const getNumberOfLines = () => {
	var amountOfLines = parseInt(prompt('entre o numero de linhas');
  	return amountOfLines;
}

const getLine = () => {
 	var line = prompt('escreva as palavras');
  	return line;
}

const getLines = numberOfLines => {
  	let lines = [];

 	 for(let i=0; i < numberOfLines; i++) {
    	lines.push(getLine());
  	}
  
  	return lines;
}

const orderLines = array => {
	for(let line of array) {

		splittedLine = line.split(' ', 50);
		filteredLine = splittedLine.filter((word) => regex.test(word));
		filteredLine.sort();
		filteredLine.sort((current, next) => next.length - current.length);

		let orderedLine = filteredLine.join(' ');
		console.log(orderedLine);
	}
}

let numberOfLines = getNumberOfLines();
let lines = getLines(numberOfLines);
orderLines(lines);

