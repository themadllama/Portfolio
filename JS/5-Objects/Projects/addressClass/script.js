function HomeAddress(street,city,zip){
        this.street = street;
        this.city = city;
        this.zip = zip
        this.getAddress = function() {
            console.log("calling");
            return `${street}, ${city},${zip}`;
    }
}


const home = new HomeAddress("Shire Mews","Bradford","bd2 3jl")

function factoryAddress(street,city,zip){
    return{
        street,
        city,
        zip,
        getAddress(){
            console.log(`${street}, ${city},${zip}`);
        }
    }
}
const add2 = new factoryAddress("Shire Mews","Bradford","bd2 3jl")


console.log("Geronimo")
document.querySelector(".output").innerHTML = home.getAddress();
console.log(factoryAddress.street)