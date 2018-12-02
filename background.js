chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.update({
     url: "https://pro-app.peek.com/dashboard/overview"
  });
});