chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command === "capture") {
    chrome.tabs.captureVisibleTab(null, {format: "png"}, function(dataUrl) {
      var filename = "screenshot_" + Date.now() + ".png";
      chrome.downloads.download({url: dataUrl, filename: filename}, function(downloadId) {
        sendResponse({result: "Download started", downloadId: downloadId});
      });
    });
    return true;
  }
});
