function experiment(){
    // Cloning a Class

    const circle = {
        radius:1,
        draw(){
            console.log("Draw")
        }
    }
    const another={}
    for (let key in circle)
        another[key] = circle[key]
    console.log(another)
}


document.querySelector(".output").innerHTML = experiment();