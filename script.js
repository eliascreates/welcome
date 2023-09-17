// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Update the currentYear span with the current year
    document.getElementById("currentYear").textContent = currentYear;
  });
  