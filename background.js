chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "capture") {
      chrome.tabs.captureVisibleTab(null, {}, function(dataUrl) {
        chrome.tabs.create({url: dataUrl});
        sendResponse({result: "Capture successful"});
      });
      return true;
    }
  });
  