



document.addEventListener("DOMContentLoaded", function(){


    chrome.storage.sync.get(['enable_notifications'], function(item){


    
 document.getElementById("n_i").checked =  item['enable_notifications'];

    });



    document.getElementById("n_i").addEventListener("click", function(){

    chrome.storage.sync.get(['enable_notifications'], function(item){
        if(item['enable_notifications'] == true){
            console.log("i am");
            document.getElementById("n_i").checked =  false;
        chrome.storage.sync.set({ 'enable_notifications':  false }, ()=>{});
        
        }
        else{
        
        document.getElementById("n_i").checked =  true;
        chrome.storage.sync.set({ 'enable_notifications':  true }, ()=>{});
        
        }
    });


        
   
});

    });

