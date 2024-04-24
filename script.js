const todoForm = document.getElementById("todo-form");
const contentDisplay = document.getElementById("contentDisplay"); 

// Function to show the to-do form
function showTodo() {
    todoForm.style.display = "block";
}

// Function to hide the to-do form
function hideTodo() {
    todoForm.style.display = "none";
}

let dataEntry = [];

// Function to check for duplicate 
function checkDuplicate(subject, time) {
    for (let entry of dataEntry) {
        if (entry[0] === subject && entry[1] === time) {
            return true; 
        }
    }
    return false; 
}

// Function to store input data
function storeInput() {
    let subjectValue = document.getElementById("subject").value;
    let timeValue = document.getElementById("time").value;

    // Check for duplicates 
    if (checkDuplicate(subjectValue, timeValue)) {
        alert("Duplicate data found!");
        return; 
    }

    let innerValue = [subjectValue, timeValue];
    dataEntry.push(innerValue);
    console.log(dataEntry);

    // Clear input fields and hide the form
    document.getElementById("subject").value = "";
    document.getElementById("time").value = "";
    hideTodo(); // Hide the form after storing data

    // Render the updated data
    renderData();
}



function renderData() {
    contentDisplay.innerHTML = "";

    dataEntry.forEach((entry, index) => {
        // Create a container element for each entry
        const container = document.createElement("div");
        container.classList.add("entry-container");

        // Create elements to display subject and time
        const subjectElement = document.createElement("h2");
        subjectElement.textContent = `Subject: ${entry[0]}`;

        const timeElement = document.createElement("p");
        timeElement.textContent = `Time: ${entry[1]}`;

        // Create a button to mark the entry as done
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.addEventListener("click", () => {
            // Remove the entry from dataEntry array
            dataEntry.splice(index, 1);
            // Re-render the list
            renderData();
        });
        container.appendChild(subjectElement);
        container.appendChild(timeElement);
        container.appendChild(doneButton);
        contentDisplay.appendChild(container);
    });
}
