const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the number of terms: `, number => {
    let n1 = 0, n2 = 1, nextTerm;
    console.log('Fibonacci Series:');
    for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

}
   readline.close();
});