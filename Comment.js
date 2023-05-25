// script.js

// Function to handle form submission
function submitComment(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  const nameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');

  const name = nameInput.value;
  const comment = commentInput.value;

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;

  // Append the comment to the comments section
  const commentsSection = document.getElementById('comments');
  commentsSection.appendChild(commentElement);

  // Clear the form inputs
  nameInput.value = '';
  commentInput.value = '';
}

// Add event listener to the form
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', submitComment);
