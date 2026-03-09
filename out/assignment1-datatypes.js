// 1. Temperature of a city in degrees Celsius: 25.5
var cityTemp = 25.5;
var unit = "Celsius";
console.log("Temperature of a city in degrees ".concat(unit, " : ").concat(cityTemp));
// 2. Whether a customer has placed an order: true or false
function orderStatus(orderPlaced) {
    switch (orderPlaced) {
        case true: return ("Order placed successfully");
        case false: return ("Order not placed. Try again");
    }
}
console.log(orderStatus(true));
console.log(orderStatus(false));
// 4. Amount of money in a customer's bank account: 1000.50
var bankBalance = 1000.50;
console.log("Amount of money in a customer's bank account: ".concat(bankBalance));
// 5. Person's email address: "john.doe@example.com"
var emailId = "john.doe@example.com";
console.log("Person's email address:".concat(emailId));
// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
var coordinates;
coordinates = [37.7749, -122.4194];
console.log("Coordinates of a location (latitude, longitude):".concat(coordinates));
// 9. Person's favourite colour: "Blue"
var color = "Blue";
console.log("Person's favourite colour:".concat(color));
// 10.Current year: 2023
var year = 2023;
console.log("Current year:".concat(year));
// 11.Number of followers on a social media platform: 1,000,000
var followers = 1000000;
console.log("Number of followers on a social media platform:".concat(followers));
// 12.Rating of a movie: 7.5
var rating = 7.5;
console.log("Rating of a movie:".concat(rating));
// 14.Title of a book: "To Kill a Mockingbird"
var title = "To Kill a Mockingbird";
console.log("Title of a book:".concat(title));
// 15.Number of employees in a company: 500
var empCount = 500;
console.log("Number of employees in a company:".concat(empCount));
// 16.Time of an event: 2:30 PM
function letsMeet(time, day) {
    return ("Time of an event: ".concat(time, " ").concat(day));
}
console.log(letsMeet("2:30", "PM"));
// 20. Distance between two cities: 200.5
var distance = 200.5;
console.log("Distance between two cities:".concat(distance));
// 3. Person's phone number: "123-456-7890"
var phoneNumber = "123-456-7890";
console.log("Person's phone number : ".concat(phoneNumber));
// 17.Name of a country: "United States"
var country = "United States";
console.log("Name of a country:".concat(country));
// 18.Person's eye color: "Brown"
var eyeColor = "Brown";
console.log("Person's eye color:".concat(eyeColor));
// 19.Person's birthplace: "New York City"
var birthPlace = "New York City";
console.log("Person's birthplace:".concat(birthPlace));
// 13.Person's blood type: 'A'
var bloodType = 'A';
console.log("Person's blood type:".concat(bloodType));
// 7. Person's marital status: true or false
function maritalStatus(isMarried) {
    return isMarried ? "Married" : "Unmarried";
}
console.log("The Person is ".concat(maritalStatus(true)));
console.log("The Person is ".concat(maritalStatus(false)));
// 8. Person's occupation: "Software Engineer"
var occupation = "Software Engineer";
console.log("Person's occupation:".concat(occupation));
var personData = {
    phoneNumber: "123-456-7890",
    country: "United States",
    eyeColor: "Brown",
    birthPlace: "New York City",
    bloodType: 'A',
    martialStatus: true,
    occupation: "Software Engineer"
};
console.log(personData);
