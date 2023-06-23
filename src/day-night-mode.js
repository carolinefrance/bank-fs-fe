function checkDayNightMode() {
    // Get the current date and time
    var currentTime = new Date();
  
    // Get the user's time zone offset in minutes
    var timeZoneOffset = currentTime.getTimezoneOffset();
  
    // Adjust the time by the offset to get the user's local time
    currentTime.setMinutes(currentTime.getMinutes() - timeZoneOffset);
  
    // Get the current hour in the user's local time
    var currentHour = currentTime.getHours();
  
    // Check if it's daytime (assumed between 6 AM and 6 PM)
    var isDaytime = currentHour >= 6 && currentHour < 18;
  
    // Get the day mode and night mode stylesheets
    var dayModeStylesheet = document.getElementById("day-mode");
    var nightModeStylesheet = document.getElementById("night-mode");
  
    // Set the appropriate stylesheet based on the time of day
    if (isDaytime) {
      // Enable the day mode stylesheet
      dayModeStylesheet.disabled = false;
      nightModeStylesheet.disabled = true;
    } else {
      // Enable the night mode stylesheet
      dayModeStylesheet.disabled = true;
      nightModeStylesheet.disabled = false;
    }
  }
  
  // Call the function when the page has finished loading
  window.addEventListener("load", checkDayNightMode);
  