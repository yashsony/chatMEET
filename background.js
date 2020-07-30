
chrome.webNavigation.onCompleted.addListener(function(details) {
 
    chrome.pageAction.show(details.tabId);


   
        
}

, {url: [{urlMatches:"https://meet.google.com/*/*"}]}  );





chrome.runtime.onMessage.addListener(data => {
    alert("notifiactions");
    if (data.type === 'notification') {
      chrome.notifications.create('', data.options);
    }
  });
  