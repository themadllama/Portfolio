function experiment(){
    //
    const courses = [
        {id:1, name:"a"},
        {id:2, name:"b"},
    ];
    // Includes won't work for reference elements
    // Find is better for these

    // Arrow Functions are much more efficient here 
    const course = courses.find(course=>course.name === "b");
    return course.id+" "+course.name;
}


document.querySelector(".output").innerHTML = experiment();