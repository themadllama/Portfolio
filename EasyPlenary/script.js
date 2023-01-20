console.log(scrambler("Giraffe"))

function scrambler(word){
    const original = word;
    word = word.toLowerCase();
    
    for (let x =0;x<word.length;x++)
        word = swap(word,x,Math.floor(Math.random()*word.length))
        
    return([original,word])
}



function swap(arr, first, last){
    arr = arr.split('');   
    let temp = arr[first];    
    arr[first] = arr[last];
    arr[last] = temp;
    arr = arr.join("").toString()   
    return arr;
}