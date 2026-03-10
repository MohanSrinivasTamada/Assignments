// 1. Temperature of a city in degrees Celsius: 25.5
let cityTemp:number = 25.5;
let unit:string = "Celsius"
console.log(`Temperature of a city in degrees ${unit} : ${cityTemp}`);
// 2. Whether a customer has placed an order: true or false
function orderStatus(orderPlaced:boolean):string{
    switch(orderPlaced){
        case true: return(`Order placed successfully`)
        case false: return("Order not placed. Try again")
    }        
}
console.log(orderStatus(true));
console.log(orderStatus(false));

// 4. Amount of money in a customer's bank account: 1000.50
let bankBalance : number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${bankBalance}`)
// 5. Person's email address: "john.doe@example.com"
const emailId:string = "john.doe@example.com";
console.log(`Person's email address:${emailId}`);
// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let coordinates : [number,number]
coordinates = [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude):${coordinates}`);
// 9. Person's favourite colour: "Blue"
let color: string = "Blue"
console.log(`Person's favourite colour:${color}`);
// 10.Current year: 2023
let year:number = 2023;
console.log(`Current year:${year}`);
// 11.Number of followers on a social media platform: 1,000,000
let followers : string = "1,000,000"
console.log(`Number of followers on a social media platform:${followers}`);
// 12.Rating of a movie: 7.5
const rating : number  = 7.5;
console.log(`Rating of a movie:${rating}`);
// 14.Title of a book: "To Kill a Mockingbird"
const title:string = "To Kill a Mockingbird";
console.log(`Title of a book:${title}`);
// 15.Number of employees in a company: 500
let empCount:number = 500;
console.log(`Number of employees in a company:${empCount}`);
// 16.Time of an event: 2:30 PM
function letsMeet(time:string,day:string):string{
    return(`Time of an event: ${time} ${day}`);
}
console.log(letsMeet("2:30","PM"));
// 20. Distance between two cities: 200.5
const distance:number = 200.5;
console.log(`Distance between two cities:${distance}`);


// 3. Person's phone number: "123-456-7890"
const phoneNumber : string = "123-456-7890";
console.log(`Person's phone number : ${phoneNumber}`);
// 17.Name of a country: "United States"
const country:string = "United States";
console.log(`Name of a country:${country}`);
// 18.Person's eye color: "Brown"
const eyeColor:string = "Brown";
console.log(`Person's eye color:${eyeColor}`);
// 19.Person's birthplace: "New York City"
const birthPlace : string = "New York City"
console.log(`Person's birthplace:${birthPlace}`)
// 13.Person's blood type: 'A'
const bloodType:string = 'A';
console.log(`Person's blood type:${bloodType}`);
// 7. Person's marital status: true or false
function maritalStatus(isMarried : boolean) {
    return isMarried ? "Married" : "Unmarried"
}
console.log(`The Person is ${maritalStatus(true)}`);
console.log(`The Person is ${maritalStatus(false)}`);
// 8. Person's occupation: "Software Engineer"
const occupation:string = "Software Engineer";
console.log(`Person's occupation:${occupation}`);

//person data using interface
interface profile {
    phoneNumber: string,
    country : string,
    eyeColor : string,
    birthPlace : string,
    bloodType : string,
    martialStatus : boolean,
    occupation : string
}

let personData:profile = {
    phoneNumber: "123-456-7890",
    country : "United States",
    eyeColor : "Brown",
    birthPlace : "New York City",
    bloodType : 'A',
    martialStatus : true,
    occupation : "Software Engineer"
}

console.log(personData)