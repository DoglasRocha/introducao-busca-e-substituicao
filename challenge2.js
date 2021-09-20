// comecei a escrever o código do desafio, mas eu não teria tempo hábil 
// para terminá-lo, então decidi adotar a solução de outro Dev

let allLines = [];

const addTwoLines = () => {
  	let twoLines = [];
  
  	for(let i=0; i < 2; i++) {
    	let line = prompt(`entre a ${i}ª linha`);
  
    	if (!line) {
      		return 0;
    	}
    
    twoLines.push(line);
 	}
  
  	allLines.push(twoLines);
}

var trigger = addTwoLines();

do {
  	trigger = addTwoLines();
} while(trigger !== 0);

console.log(allLines);
