const movies = [
     {title:"a", year:2018,rating: 4.5},
     {title:"b", year:2018,rating: 4.7},
     {title:"c", year:2018,rating: 3},
     {title:"d", year:2017,rating: 4.5},
];

movies.filter(m=>m.year===2018 && m.rating>=4)
.sort((a,b)=>{
     a<b => -1
     a === b => 0
     a>b => 1

})