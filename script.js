var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
};

function newDelBtn() {
    var delButton = document.createElement("button");
    delButton.textContent = "delete";
	delButton.addEventListener("click", delList);
	return delButton;
};

function toggleDone(event){
	this.classList.toggle("done");
};

function createListElement() {
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(newDelBtn());
	li.addEventListener("click", toggleDone);

    input.value = "";
};

function delList(){
	var idx = this.parentElement.remove();
};

function addListAfterClick() {
        if (inputLength() > 0){
            createListElement();
    }
};

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
    } 
};

function addtoggleDoneDelete(item, index){
	item.addEventListener("click", toggleDone);
	item.appendChild(newDelBtn());
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(addtoggleDoneDelete);