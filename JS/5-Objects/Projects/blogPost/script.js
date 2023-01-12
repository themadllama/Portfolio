function experiment(){
    const blog ={
        title:"My Blog",
        author:"Mr M",
        views:19,
        comments:[
            {author:"a",body:"b"},
            {author:"a",body:"b"},
        ],
        isLive:false
    }
    return `${blog.title} - ${blog.author} - ${blog.isLive}`
}   


document.querySelector(".output").innerHTML = experiment();