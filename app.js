"use strict";
// Q1 Personal Message
// let personName: String = "Eric";
// console.log(`"Hello ${personName}, would you like to learn some python today?"`);
//  Q2 Name Cases
// // lowercase
// let personName: String = "Daniyal";
// console.log("lowercase:", personName.toLowerCase());
// // UPPERCASE
// console.log("uppercase:", personName.toUpperCase());
// // Titlecase
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
// Q3 Famous Quote
// let quote: string = `"A person who never made a mistake never tried anything new."`;
// let author: string = "Albert Einstein";
// console.log(`${author} once said, ${quote}`);
// Q4 Famous Quote 2
// let famous_person = "Albert Einstein";
// let quote: string = `"A person who never made a mistake never tried anything new."`;
// let message = `${famous_person} once said, ${quote}`;
// console.log(message);
// Q5 Stripping Name
// let personName: string = `\n\t SHEIKH DANIYAL AHMED\t\n`;
// console.log(personName);
// let stripped: string = personName.trim()
// console.log(stripped);
// Q6 and Q7 Number Eight
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);
// Q9 Favorite Number
// let favoriteNumber: number = 5
// console.log(`My favorite number is ${favoriteNumber}`);
// Q10 Adding Comments
// My name is Daniyal
// Dated: 24/02/2024
// this program will run simple code just like Hello Daniyal
// console.log("Hello Daniyal");
// Q11 Names
// let members: string[] = ['Ali','Khurram','Sami','Owais'];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }
// Q12 Greetings
// let members: string[] = ['Ali','Khurram','Sami','Owais'];
// let message: string = "Kiya Haal Hain?:";
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }
// Q13 Your Own Array
// let transportation: string[] = ['Suzuki','Yamaha','Kawasaki','Honda','Lexus','Civic','Benelli'];
// for(let i=0; i<transportation.length; i++){
// console.log("I would like to own a " + transportation[i]);
// }
// Q14 Guests List
// let guestsList: string[] = ['Ali','Sami','Khurram','Owais'];
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n I would like you to invite on dinner tomorrow at my place. \n Thank You,\n Sheikh Daniyal Ahmed.");
// }
// Q15 Changing Guest List
// let guestsList: string[] = ['Ali','Sami','Khurram','Owais'];
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n I would like you to invite on dinner tomorrow at my place. \n Thank You,\n Sheikh Daniyal Ahmed.");
// }
// let not_present: string ='Owais';
// let new_guest: string = 'Saif';
// guestsList[3] = new_guest;
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n I would like you to invite on dinner tomorrow at my place. \n Thank You,\n Sheikh Daniyal Ahmed.");
// }
// console.log(`Mr. ${not_present} will not coming on dinner tommorrow`);
// Q16 More Guest
// let guestsList: string[] = ['Ali','Sami','Khurram','Owais'];
// let not_present: string ='Owais';
// let new_guest: string = 'Saif';
// guestsList[3] = new_guest;
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n I would like you to invite on dinner tomorrow at my place. \nThank You,\nSheikh Daniyal Ahmed.");
// }
// guestsList.unshift('Ijaz', 'Kamran','Waiz')
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n I would like you to invite on dinner tomorrow at my place.\n we found bigger table so we invite three more guests \nThank You,\nSheikh Daniyal Ahmed.");
// }
// Q17 Shrink Guest List
// let guestsList: string[] = ['Ali','Sami','Khurram','Owais'];
// let not_present: string ='Owais';
// let new_guest: string = 'Saif';
// guestsList[3] = new_guest;
// guestsList.unshift('Ijaz', 'Kamran','Waiz')
// console.log("\n unfortuntely we can't arrange big table, only two peoples are allowed'");
// while(guestsList.length>2){
//     let remove_guest = guestsList.pop();
//     console.log(`Sorry ${remove_guest}, you are not invited for the dinner.`);
// }
// for(let i=0; i<guestsList.length; i++){
//     console.log("Dear " + guestsList[i] + ",\n You are still invited to the dinner tomorrow \nThank You,\nSheikh Daniyal Ahmed.");
// }
// guestsList.splice(0,2);
// console.log(guestsList)
//Q18 Seeing the World
// // Store the locations in a array. Make sure the array is not in alphabetical order.
// let Places: string[] = ['Turkey','UK','Malaysia','South Africa','Thiland'];
// // Print your array in its original order.
// // console.log("Original Order: " , Places);
// // Print your array in alphabetical order without modifying the actual list.
// console.log("Alphabetical Order: ", [...Places.sort()])
// // Show that your array is still in its original order by printing it.
// console.log("Original Order After Sorting ",Places);
// Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Alphabetical Order: ", [...Places].sort().reverse());
// Show that your array is still in its original order by printing it again.
// console.log("Original Order After Reverse Sorting ", Places)
// Reverse the order of your list. Print the array to show that its order has changed.
// Places.reverse()
// console.log("Reversed Order: ", Places.sort());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("Back to Original Order: ", Places);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Places.sort();
// console.log("Sorted in Alphabetical Order: ", Places);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Sorted in reverse alphabetical order: ", [...Places].sort().reverse());
// Q19 Dinner Guests
// let Invitaion: string[] = ['Ijaz','Kamran'];
// let count_Invitation: number = (Invitaion.length);
// console.log(`${count_Invitation} people will come to the dinner.`);
// Q20  Think of something stored in a array
// let country: string[] = ['Pakistan','India','England','Australia'];
// console.log("List of Countries:");
// console.log(country);
// //Q21 Typescript Object
// interface item {
//     name: String
//     price: number
// }
// const book: item ={
//     name: 'The Team',
//     price: 200
// }
// const novel: item ={
//     name: 'Gumaan',
//     price: 300
// }
// console.log(`book name: ${book.name}`, `Price: $${book.price}`);
// console.log(`Novel name: ${novel.name}`, `Price: $${novel.price}`);
//Q22 Intentional Error
// let array: (string | number) [] = ['Daniyal','Khurram', 3,5,9,'Ali','Sami'];
// console.log(array[8]);
// console.log(array[6]);
//Q23 Conditional Test
// let car: string = 'subaru';
// //equality comparision
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// //strict equality comparision
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');
// //inequality comparision
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru');
// //strict inequality comparision
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');
// //less than comparision 
// console.log("Is car < 'subaru'? I predict False.");
// console.log(car < 'subaru');
// //greater than comparision 
// console.log("Is car > 'subaru'? I predict False.");
// console.log(car > 'subaru');
// //less than or equal to comparision 
// console.log("Is car <= 'subaru'? I predict False.");
// console.log(car <= 'subaru');
// //greater than or equal to comparision 
// console.log("Is car >= 'subaru'? I predict False.");
// console.log(car >= 'subaru');
// // checking truthness
// console.log("Is car? I predict True.");
// console.log(car);
// // checking falseness
// console.log("Is car? I predict False.");
// console.log(!car);
// Q24 More Conditional Test
// let car: string = 'Toyota';
// let age: number = 30;
// let numbers: number[] = [1,2,3,4]
// ** STRING TEST **
// // equality
// console.log("Is car == 'toyota'? I predict True.");
// console.log(car == 'Toyota');
// //strict equality
// console.log("Is car === 'Toyota'? I predict False.");
// console.log(car === 'toyota');
// inequality
// console.log("Is car != 'Honda'? I predict True.");
// console.log(car != 'Honda');
// // strict inequality
// console.log("Is car !== 'Toyota'? I predict False.");
// console.log(car !== 'Toyota');
// ** LOWERCASE **
// console.log("Is car.toLowerCase() == 'toyota'? I predict True.");
// console.log(car.toLowerCase() == 'toyota');
// console.log("Is car === car.toLowerCase()? I predict False");
// console.log(car === car.toLowerCase());
// ** NUMERICAL TEST **
// console.log(age == 30);
// console.log(age != 25);
// console.log(age > 25);
// console.log(age < 30);
// console.log(age >= 30);
// console.log(age <= 25);
// ** LOGICAL OPERATORS **
// console.log(age > 20 && age < 35);
// console.log(age > 30 || age < 18);
// ** ARRAY TEST **
// console.log(3 in numbers);
// console.log(5 in numbers);
// console.log(4 in numbers);
// ** Q25 ALIEN COLOR**
// let alien_color: string = "green";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }
// alien_color = "red"
// if(alien_color == "green"){    
//     console.log("the player just earned 5 points.");
// }
// ** Q26 ALIEN COLOR 2**
// let alien_color: string = "green";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// }
// else{
//     console.log("the player just earned 10 points.");
// }
// alien_color = "red";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// }    
// Q27 ALIEN COLOR 3
// Version 1
// let alien_color: string = "green";
// if(alien_color == "green"){
//     console.log("the player earned 5 points.")
// }
// else if(alien_color == "yellow"){
//     console.log("the player earned 10 points.")
// }
// else if(alien_color == "red"){
//     console.log("the player earned 15 points.")
// }
// else{
//     console.log("Please select right color.")
// }
// // Version 2
// alien_color = "red";
// if(alien_color == "green"){
//     console.log("the player earned 5 points.")
// }
// else if(alien_color == "yellow"){
//     console.log("the player earned 10 points.")
// }
// else if(alien_color == "red"){
//     console.log("the player earned 15 points.")
// }
// else{
//     console.log("Please select right color.")
// }
// // Version 3
// alien_color = "yellow";
// if(alien_color == "green"){
//     console.log("the player earned 5 points.")
// }
// else if(alien_color == "yellow"){
//     console.log("the player earned 10 points.")
// }
// else if(alien_color == "red"){
//     console.log("the player earned 15 points.")
// }
// else{
//     console.log("Please select right color.")
// }
// // Version 4
// alien_color = "blue";
// if(alien_color == "green"){
//     console.log("the player earned 5 points.")
// }
// else if(alien_color == "yellow"){
//     console.log("the player earned 10 points.")
// }
// else if(alien_color == "red"){
//     console.log("the player earned 15 points.")
// }
// else{
//     console.log("Please select right color.")
// }
//  Q 28 Stages of Life
// let age: number = 30
// if (age<2){
//     console.log("the person is a baby")
// }
// else if (age>=2 && age<4){
//     console.log("t   is a toddler")
// }
// else if(age>=4 && age<13){
//     console.log("the person is a kid")
// }
// else if(age>=13 && age<20){
//     console.log("the person is a teenager")
// }
// else if(age>=20 && age<65){
//     console.log(" the person is an adult")
// }
// else{
//     console.log("the person is an elder")
// }
// Q 29 Favourite Fruit
// let favourite_fruits: string[] = ['Orange','Apple','Kiwi'];
// if(favourite_fruits.includes('Apple')){
//     console.log("I really like Apple!");
// }
// if(favourite_fruits.includes('Bananas')){
//     console.log("I really like Bananas!");
// }
// if(favourite_fruits.includes('Orange')){
//     console.log("I really like Orange!");
// }
// if(favourite_fruits.includes('Mango')){
//     console.log("I really like Mango!");
// }
// if(favourite_fruits.includes('Kiwi')){
//     console.log("I really like Kiwi!");
// }
// Q 30 Hello Admin
// let users: string[]= ['Daniyal','Ali','Khurram','Imad','Admin'];
// for(let user of users){
//     if(user === "Admin"){
//         console.log("Hello Admin, would you like to see a status report?")
//     }
// else{
//     console.log(`Hello ${user}, thank you for logging in again.`)
// }
// }
// Q 31 No Users
let users = ['Daniyal', 'Ali', 'Khurram', 'Imad', 'Admin'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users = [];
    console.log("All users has been removed " + users.length);
}
