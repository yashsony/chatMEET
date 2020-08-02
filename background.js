
chrome.webNavigation.onCompleted.addListener(function(details) {
 
    chrome.pageAction.show(details.tabId);
    var today = new Date();
    chrome.storage.sync.set({ 'enable_notifications': true }, ()=>{});

    
    chrome.storage.sync.set({'expired_time': today.getTime() , 'is_notification': ''}, ()=>{});
   
        
}

, {url: [{urlMatches:"https://meet.google.com/*/*"}]}  );





chrome.runtime.onMessage.addListener(data => {
  
    if (data.type === 'notification') {
      //chrome.notifications.create('', data.options);
      chrome.storage.sync.get(['is_notification','expired_time' ], function(items){
        var today = new Date();
        if(items['expired_time'] <= today.getTime()){
          console.log("create");
          chrome.notifications.create('', data.options, function(notifications_id){
            chrome.storage.sync.set({'expired_time': today.getTime() + 7000, 'is_notification' : notifications_id}, function(){})
          });
        }
        else{
          console.log("replaced");
          chrome.notifications.clear(items['is_notification'], function(){
            chrome.notifications.create('', data.options, function(notifications_id){
              chrome.storage.sync.set({'expired_time': today.getTime()+ 7000, 'is_notification' : notifications_id}, function(){ })
            });
          });

        }

      });


    }
  });
  