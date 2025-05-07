// Get references to the elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener for the form submission
todoForm.addEventListener('submit', function(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Get the value from the input field and trim whitespace
    const todoText = todoInput.value.trim();

    // If the input is not empty
    if (todoText !== '') {
        // Create a new list item (li)
        const listItem = document.createElement('li');

        // Create the container for the circle and text (left side)
        const leftSection = document.createElement('div');
        leftSection.classList.add('todo-item-left'); // Add class for styling/event handling

        // Create the check circle element
        const checkCircle = document.createElement('span');
        checkCircle.classList.add('check-circle');

        // Create the span for the todo text
        const todoTextSpan = document.createElement('span');
        todoTextSpan.classList.add('todo-text'); // Add a class for styling/selection
        todoTextSpan.textContent = todoText;

        // Create the delete button (trash icon representation)
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn'); // Add a class for styling
        // Using a trash can emoji - you could replace with an icon font or SVG later
        deleteButton.textContent = 'X'; // Unicode for trash can

        // Append circle and text to the left section
        leftSection.appendChild(checkCircle);
        leftSection.appendChild(todoTextSpan);

        // Append the left section and delete button to the list item
        listItem.appendChild(leftSection);
        listItem.appendChild(deleteButton);


        // --- Add Event Listeners ---

        // Event listener to toggle 'completed' class when clicking the left section (circle or text)
        leftSection.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        // Event listener to remove the list item when delete is clicked
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        // Append the new list item to the todo list (ul)
        todoList.appendChild(listItem);

        // Clear the input field after adding
        todoInput.value = '';
    }
});