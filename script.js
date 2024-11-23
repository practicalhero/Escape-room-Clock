let imageWindow = null;  // Store the image window reference

// Function to update the clock every second
function updateTime() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    // Display current time on the clock
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // If the time is 09:00, show the image in a new window
    if (hours === '09' && minutes === '00' && seconds === '00') {
        displayImageInNewWindow();
    }

}

// Function to display the image in a new window
function displayImageInNewWindow() {
    // If the image window is already open, do nothing
    if (imageWindow && !imageWindow.closed) {
        return;
    }

    // Open a new window
    imageWindow = window.open("", "_blank", "width=1200,height=800");

    // Add the image to the new window
    imageWindow.document.write('<html><head><title>Special Image</title></head><body>');
    imageWindow.document.write('<img src="LUDO-CLASH.jpg" alt="Special Image" style="width:1200px; height:800px;">');
    imageWindow.document.write('</body></html>');
}

// Function to set a custom time from the input field
function setCustomTime() {
    const customTime = document.getElementById('setTimeInput').value;
    const [hours, minutes] = customTime.split(':');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:00`;

    // Check if custom time is 9:00 and display the image in a new window
    if (hours === '09' && minutes === '00') {
        displayImageInNewWindow();
    }
}

// Call updateTime every second
setInterval(updateTime, 1000);
