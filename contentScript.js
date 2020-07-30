
var stop
   stop =  setInterval(function() {
        if(document.getElementsByClassName("NzPR9b").length > 0){
console.log("stoppend");
          clearTimeout(stop);      element_exists(); start_checking_for_messages();       
        }
       else
console.log("working");     
    }, 2000);





 
  





function element_exists(){




  document.getElementsByClassName("NzPR9b")[0].children[2].addEventListener("click", function(){
    setTimeout( function(){
  
      document.getElementsByClassName("vvTMTb")[0].children[0].innerHTML += `    <div  id="my_emojis"style=" position: fixed; bottom:70px; right:10px; font-size: 30px; ">
      <div style="text-shadow:    3px 3px 5px 6px #ccc; pointer-events : auto; cursor: pointer; "> 🙂 </div>
      
      <div style="text-shadow:    3px 3px 5px 6px #ccc; pointer-events : auto ; cursor: pointer ;"> 👏</div>
      
      <div style="text-shadow:    3px 3px 5px 6px #ccc;  pointer-events : auto; cursor: pointer; "> 👍 </div>
      
      <div style="text-shadow:  3px 3px 5px 6px #ccc; pointer-events : auto; cursor: pointer; "> 😨 </div>
      
      </div>`;
  
  
    }, 500);
  
  setTimeout(function(){
  
          document.getElementById("my_emojis").children[0].addEventListener("click", function(){
            //console.log("worked");
            document.getElementsByTagName("textarea")[0].value += document.getElementById("my_emojis").children[0].innerText;
            document.getElementsByTagName("textarea")[0].focus();
          });
          
          
          document.getElementById("my_emojis").children[1].addEventListener("click", function(){
            //console.log("worked");
            document.getElementsByTagName("textarea")[0].value += document.getElementById("my_emojis").children[1].innerText;
            document.getElementsByTagName("textarea")[0].focus();
          });
          
          
          
          
          document.getElementById("my_emojis").children[2].addEventListener("click", function(){
            //console.log("worked");
            document.getElementsByTagName("textarea")[0].value += document.getElementById("my_emojis").children[2].innerText; 
            document.getElementsByTagName("textarea")[0].focus();
          });
          
          
          
          document.getElementById("my_emojis").children[3].addEventListener("click", function(){
            //console.log("worked");
            document.getElementsByTagName("textarea")[0].value += document.getElementById("my_emojis").children[3].innerText; 
            document.getElementsByTagName("textarea")[0].focus();
          });
  
  
  
  }, 1000);
  
  
  
  });
  

}































function start_checking_for_messages(){
    setTimeout(function () {
      chrome.storage.sync.set({'lngth': 0, 'chld_lngth': 0},()=>{});
      setInterval( ()=>{check();}, 1000);     
  }, 1000);

}


function check(){
    
  var a =   document.getElementsByClassName("GDhqjd");
 
  if(a.length > 0){
    //console.log("check function called and found element");
    chrome.storage.sync.get(['lngth', 'chld_lngth'], function(items) {
            
            if(items["lngth"] < a.length){
                var name_time = a[a.length -1].firstChild.firstElementChild.innerText;
                var message = a[a.length -1].children[1].innerText;

                chrome.storage.sync.set({'lngth': a.length, 'chld_lngth': 1},()=>{});

                chrome.runtime.sendMessage('', {
                    type: 'notification',
                    options: {
                      title: name_time,
                      message: message,
                      iconUrl: 'images/48.png',
                      type: 'basic'
                    }
                  });
                
             
            }
            var child_length = a[a.length -1].children[1].childElementCount;
            if(items["chld_lngth"] < child_length){
                var name_time = a[a.length -1].firstChild.firstElementChild.innerText;
                var message = a[a.length -1].children[1].innerText;


                chrome.storage.sync.set({'lngth': a.length, 'chld_lngth': child_length},()=>{});

                chrome.runtime.sendMessage('', {
                    type: 'notification',
                    options: {
                      title: name_time,
                      message: message,
                      iconUrl: 'images/48.png',
                      type: 'basic'
                    }
                  });


            }
    
    });

}

}







    

