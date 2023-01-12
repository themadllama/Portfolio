const McD = new priceRange(21)
console.log(McD.rating())

function priceRange(price){
    this.price = price
    this.rating = function(){
        if(price<20){
            return("£")
        }else if (price<40){
            return("££")
        }else{
            return("£££")
        }
    }
}