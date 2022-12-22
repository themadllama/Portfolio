console.log(sum(21))

function sum(limit){
    let sum = 0;
    for(i=0;i<=limit;i++)
        if(i%3===0 || i%5===0)
            sum+=i;
            
    return sum;
}


// An acceptable solution, but above is simpler
// function sum(num){
//     let total = 0
//     for(x=3;x<num;x+=3){
//         total+=(x)
//     }
//     for(x=5;x<num;x+=5){
//         total+=(x)
//     }
//     return(total)
// }