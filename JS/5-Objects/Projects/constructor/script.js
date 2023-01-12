
let post = new Post("Llamas Rock","Madonna","Mr M")

console.log(post);

//Constructor Functions put all data in parameters and are a very millingtonish way of doing things
function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views;
    this.comments=[];
    this.isLive = false;
}