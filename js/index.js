const password = prompt("Are you Jayne? Enter password: ");
if (password === "pepito") {
    alert("HI BABY!! Enjoy the message C:");
    document.querySelector(".readmore").classList.toggle('message');
}
else {
    alert("Welcome to our webpage! Sana all talaga, no?");
}