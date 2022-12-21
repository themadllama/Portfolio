// Speed Limit = 70
// Every 5mph over, add a point to their license
// 12 Points over, cancel licence
document.querySelector("button").addEventListener("click",()=>{
    const input = document.querySelector("input")
    const output = document.querySelector(".output")
    output.innerHTML = speedChecker(input.value);    
})

function speedChecker(speed){
    const speedLimit = 70
    const mphPoints = 5;
    if(speed>speedLimit){
        let excess = Math.floor((speed-speedLimit)/mphPoints);
        if (excess>=12){
            return(`${(speed-speedLimit)}mph over limit, licence confiscated`)    
        }else{
            return (`${(speed-speedLimit)}mph over limit, ${excess} points added`)
        }
    }else{
        if (speed != "" && speed >= 0){
            return("Good")
        }else{
            return("Enter a value")
        }
    }
}