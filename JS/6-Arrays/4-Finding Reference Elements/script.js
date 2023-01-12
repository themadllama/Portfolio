function experiment(){
    //
    const courses = [
        {id:1, name:"a"},
        {id:2, name:"b"},
    ];
    // Includes won't work for reference elements
    // Find is better for these

    const course = courses.find(function(course){
        return course.name === "b"
    });
    return course.id+" "+course.name;
}


document.querySelector(".output").innerHTML = experiment();