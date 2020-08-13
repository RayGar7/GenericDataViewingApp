let localStorage = window.localStorage;

var href = document.location.href;
var pageId = href.substr(href.lastIndexOf('/') + 1).slice(0,5); //holds the first 5 characters of the name of the html page

function generateId() {
		let newId = Math.random().toString(36).substr(2);

		while (storageGet(newId)) {
			newId = Math.random().toString(36).substr(2);
		}
		return (pageId + newId);
}

function storageInsert(key, obj) {
    localStorage.setItem(key, obj);
}

function storageGet(key) {
    return (localStorage.getItem(key));
}

function storageRemove(key) {
	localStorage.removeItem(key);
}

$(document).ready(() => {
	localStorage = window.localStorage; 

	//Load all.
	for (let i = 0; i < localStorage.length; i++){
		let key = localStorage.key(i);
		if(pageId === key.slice(0,5)) {
			$(".note-list").append("<li id='note-" + key +"'> <span>X</span> " + storageGet(key) + "</li>");
		}
	}
});

//Click on X to delete Todo
$(".note-list").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
			localStorage.removeItem($(this).attr("id").slice(5));

			$(this).remove();
	});
	event.stopPropagation();
});

//Add new list item on enter key press
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Hold input.
		let todoText = $(this).val();
		
		//Generate an unique ID.
		let newId = generateId();
		
		//Reset Input.
		$(this).val("");


		//Create new element.
		$(".note-list").append("<li id='note_" + newId + "'>" +  "<span>X</span> " + todoText + "</li>");
		
		//Add to storage.
		storageInsert(newId, todoText);
	}
});

