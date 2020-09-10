// Open Modal Button
const openModalButton = document.getElementById("open-modal");
// Modal
const modal = document.getElementById("modal");
// Close Modal Button
const closeModalButton = document.getElementById("close-modal");


// Test alert
const clickAlert = () => alert("Button Clicked!");



// Open Modal
openModalButton.addEventListener(
    "mousedown",
    () => modal.classList.add("active")
);

// Close Modal
closeModalButton.addEventListener(
    "mousedown",
    () => modal.classList.remove("active")
);

