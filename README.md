# Keylogger Script README

## Description
This JavaScript script is designed for educational purposes to demonstrate how data can be captured from web forms and sent to a server in real-time. It attaches listeners to all form elements on a webpage.

## Warning
- **Strictly for Educational Use**: This script is provided for educational purposes only.
- **Consent is Mandatory**: It should only be used with explicit permission from users whose data is being captured.
- **Legal and Ethical Compliance**: Unauthorized use is unethical and illegal in many jurisdictions. Ensure compliance with privacy laws and regulations.

## Functionality
- **Event Listener**: Activates upon page load.
- **Data Capture**: Targets all form elements, capturing data changes.
- **Data Exfiltration**: Sends data to a specified server URL. Replace `'<your-server>'` with your server URL.
- **Data Hashing**: Demonstrates hashing of form data (not recommended for actual use).
- **XHR Requests**: Utilizes `XMLHttpRequest` to send captured data.

## Testing
- **Local Testing**: For testing, set up a simple server (e.g., using Python) to receive and display data.
- **Database Integration**: Optionally, integrate with a CRUD application to store data in a database.
