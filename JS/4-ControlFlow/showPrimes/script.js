showPrimes(32)
function showPrimes(num){
    let primes = [];
    let prime = true;
    for ( let row = 2;row<num;row++){
        for(let col=2;col<row;col++){
            if (row%col ===0) prime = false;
        }
        if (prime === true) primes.push(row)
        prime = true
    }
    console.log(primes)
}