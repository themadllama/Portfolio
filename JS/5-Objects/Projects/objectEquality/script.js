let address1 = new Address("a","b","c");
let address2 = new Address("a","b","c");

function Address(street,city,zip){
    this.street=street;
    this.city = city;
    this.zip = zip;
}
if (address1.city === address2.city && address1.street === address2.street && address1.zip === address2.zip){
    console.log("They're Equal")
}else{
    console.log("Their not")
}
