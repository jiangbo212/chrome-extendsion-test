document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("capture").addEventListener("click", function() {
    chrome.runtime.sendMessage({command: "capture"}, function(response) {
      console.log("Capture response:", response);
    });
  });
});
