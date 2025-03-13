const inputbox = document.getElementById("inputbox"); // Get the input box element
const listContainer = document.getElementById("listContainer"); // Get the list container element

function addTask() { // Function to add a new task to the list
    // Check if the input box is empty
    if (inputbox.value === '') { // If the input box is empty, show an alert
        alert("Add something to the text area");
    } else {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inputbox.value; // Set the inner HTML of the list item to the input value
        listContainer.appendChild(li); // Append the new list item to the list container

        let span = document.createElement("span"); // Create a new span for the delete button
        span.innerHTML = "\u00d7"; // Set the inner HTML of the span to a delete symbol
        li.appendChild(span); // Append the span to the list item
    }

    inputbox.value = ''; // Clear the input box
    saveData(); // Save the current list to local storage

}

listContainer.addEventListener("click", handleListClick, false); // Event listener for handling clicks on list items and spans

function handleListClick(event) { // Function to handle click events on the list
    // Check if the clicked element is a list item or a span
    if (event.target.tagName === "LI") { // If the clicked element is a list item
        toggleTaskCompletion(event.target); // Toggle the completion state of the task
    } else if (event.target.tagName === "SPAN") { // If the clicked element is a span
        removeTask(event.target); // Remove the task from the list
    }
}

function toggleTaskCompletion(taskItem) { // Function to toggle the completion state of a task
    // Toggle the "checked" class on the task item
    taskItem.classList.toggle("checked"); // Toggle the checked class
    saveData(); // Save the current state of the list
}

function removeTask(spanElement) { // Function to remove a task from the list
    // Remove the task item from the list
    spanElement.parentElement.remove(); // Remove the parent list item of the span
    saveData(); // Save the current state of the list
}

function saveData() { // Function to save the current list to local storage
    // Save the current list's HTML to local storage
    localStorage.setItem("data", listContainer.innerHTML); // Save the current list's HTML to local storage
}

function showTask() { // Function to load saved tasks from local storage
    // Load the saved list from local storage and display it
    listContainer.innerHTML = localStorage.getItem("data"); // Load the saved list from local storage and display it
}

showTask(); // Call showTask to display the saved tasks on page load
