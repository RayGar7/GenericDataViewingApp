//Use the DOM API to display the modals according to which one was clicked, looks like WET code but, there's nothing I can do

// Get the modal
var keyModal = document.getElementById('keyModal');

// Get the button that opens the modal
var keyBtn = document.getElementById("keyBtn");

// Get the <span> element that closes the modal
var keySpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
keyBtn.onclick = function() {
    keyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
keySpan.onclick = function() {
    keyModal.style.display = "none";
}

// Get the "i" modal
var iModal = document.getElementById('iModal');

// Get the button that opens the modal
var iBtn = document.getElementById("iBtn");

// Get the <span> element that closes the modal
var iSpan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
iBtn.onclick = function() {
    iModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
iSpan.onclick = function() {
    iModal.style.display = "none";
}

// Get the modal
var noteModal = document.getElementById('noteModal');

// Get the button that opens the modal
var noteBtn = document.getElementById("noteBtn");

// Get the <span> element that closes the modal
var noteSpan = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
noteBtn.onclick = function() {
    noteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
noteSpan.onclick = function() {
    noteModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == keyModal) {
        keyModal.style.display = "none";
    }
	if (event.target == iModal) {
        iModal.style.display = "none";
    }
    if(event.target == noteModal) {
        noteModal.style.display = "none";
    }
}