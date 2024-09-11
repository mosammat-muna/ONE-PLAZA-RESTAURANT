// Wait for the DOM (HTML document) to be fully loaded before running JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and its input elements
    const reservationForm = document.querySelector("form");
    const nameInput = document.querySelector('input[name="name"]'); 
    const emailInput = document.querySelector('input[name="email"]'); 
    const guestInput = document.querySelector('input[name="number"]'); 
    const dateTimeInput = document.querySelector('input[type="datetime-local"]'); 
    const messageInput = document.querySelector('textarea[name="message"]'); 
    const messageSentDiv = document.querySelector(".message"); 
    const submitButton = document.querySelector("#submit"); 
  
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Check if the name and email fields are empty
      if (!nameInput.value || !emailInput.value) {
        alert("Name and email are required fields."); // Show an alert message
        return; // Stop form submission
      }
  
      // Check if the entered email is in a valid format
      if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address."); // Show an alert message
        return; // Stop form submission
      }
  
      // Get the selected date & time and the current time
      const selectedDateTime = new Date(dateTimeInput.value);
      const now = new Date();
  
      // Check if the selected date & time is in the future
      if (selectedDateTime <= now) {
        alert("Please select a future date and time."); // Show an alert message
        return; // Stop form submission
      }
  
      // Check if a message is entered
      if (!messageInput.value) {
        alert("Please enter a message."); // Show an alert message
        return; // Stop form submission
      }
  
      // If all validations pass, display a "Message Sent" confirmation
      messageSentDiv.style.display = "block";
  
      // Reset the form fields
      reservationForm.reset();
  
      // Simulate sending data to a server (replace this with actual AJAX code)
      setTimeout(function () {
        messageSentDiv.style.display = "none"; // Hide the message sent confirmation after 3 seconds
      }, 3000);
    });
  });
  
  
  
  