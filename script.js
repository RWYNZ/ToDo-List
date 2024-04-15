const todoForm = document.getElementById("todo-form");
const contentDisplay = document.getElementById("contentDisplay"); // Assuming you have an element with id "contentDisplay" to display data

// Function to show the to-do form
function showTodo() {
    todoForm.style.display = "block";
}

// Function to hide the to-do form
function hideTodo() {
    todoForm.style.display = "none";
}

let dataEntry = [];

// Function to check for duplicate entries
function checkDuplicate(subject, time) {
    for (let entry of dataEntry) {
        if (entry[0] === subject && entry[1] === time) {
            return true; // Duplicate found
        }
    }
    return false; // No duplicate found
}

// Function to store input data
function storeInput() {
    let subjectValue = document.getElementById("subject").value;
    let timeValue = document.getElementById("time").value;

    // Check for duplicates before storing
    if (checkDuplicate(subjectValue, timeValue)) {
        alert("Duplicate data found!");
        return; // Don't add duplicate data
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

// Function to render data as containers
function renderData() {
    // Clear previous content
    contentDisplay.innerHTML = "";

    // Iterate over each entry in dataEntry
    dataEntry.forEach(entry => {
        // Create a container element for each entry
        const container = document.createElement("div");
        container.classList.add("entry-container");

        // Create elements to display subject and time
        const subjectElement = document.createElement("p");
        subjectElement.textContent = `Subject: ${entry[0]}`;

        const timeElement = document.createElement("p");
        timeElement.textContent = `Time: ${entry[1]}`;

        // Append subject and time elements to the container
        container.appendChild(subjectElement);
        container.appendChild(timeElement);

        // Append the container to the contentDisplay
        contentDisplay.appendChild(container);
    });
}