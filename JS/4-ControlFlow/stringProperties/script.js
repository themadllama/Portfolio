const movie = {
    title:"a",
    releaseYear: 2020,
    rating:4.8,
    director: "Sam Mendes"
}

showProperties(movie)

function showProperties(obj){
    for (let value in obj)
        if (typeof obj[value] === "string")
                console.log(value,obj[value]);
}