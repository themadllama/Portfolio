function experiment(){
    // 3 ways to remove elements
    let numbers = [1,2,3,4];

    //Solution 1 ( can't be const)
    numbers = [1,2,3,4];
    numbers = [] 
    console.log(numbers)
    //Solution 2 - length
    numbers = [1,2,3,4];
    numbers.length=0
    console.log(numbers)
    //Solution3 - splice
    numbers = [1,2,3,4];
    numbers.splice(0,numbers.length)
    console.log(numbers)
    //solution 4 - while ( bad )
    numbers = [1,2,3,4];
    while(numbers.length>0)
        numbers.pop();
    console.log(numbers)

    return 0;
}


document.querySelector(".output").innerHTML = experiment();