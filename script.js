const inputText = document.querySelector(".input");

const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputText.value === "") {
        alert("Please Enter Some Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        if (inputText.value !== "") {
            storeTask();
        }
        inputText.value = "";
    }
}

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeTask();
    }

});

function storeTask() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function getTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
getTask();