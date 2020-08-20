
var stop
   stop =  setInterval(function() {
        if(document.getElementsByClassName("NzPR9b").length > 0){
//console.log("stoppend");
          clearTimeout(stop);      element_exists(); start_checking_for_messages();       
        }
      
//console.log("working");     
    }, 2000);


var stopattandnace = setInterval(function(){
  if(document.getElementsByClassName("cS7aqe NkoVdd").length > 0){
    clearTimeout(stopattandnace);
    startattandance();
  }
})

var attandancetimer = 1000*60*10;





 function startattandance(){
    var allstudentpresent = new Set();
      var foo = setInterval(()=>{
        attandancetimer-=1000*60;
        if(attandancetimer < 0){
          clearTimeout(foo);
        }
        setTimeout(()=>{

          let student = document.getElementsByClassName("cS7aqe NkoVdd");
          for(let i = 0; i < student.length; i++){
            console.log(student[i].innerHTML);
            allstudentpresent.add(student[i].innerHTML);
          }
  
        },10000);
      },1000*60);

      for(let x = 0; x < allstudentpresent.length; x++)
        console.log(allstudentpresent[i]);
      
   
 }
  





function element_exists(){




  document.getElementsByClassName("NzPR9b")[0].children[2].addEventListener("click", function(){
    setTimeout( function(){
  
      document.getElementsByClassName("vvTMTb")[0].children[0].innerHTML += `    <div  id="my_emojis"style=" position: fixed; bottom:70px; right:20px; font-size: 30px; ">
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

      setInterval( function(){
        chrome.storage.sync.get(['enable_notifications'], function(items){
          if(items['enable_notifications'] == true){
            check();
            console.log("checking for new messages");
          }
        });
      }, 500);     

  }, 400);

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
                      type: 'basic',
                      silent : true
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
                      type: 'basic',
                      silent : true
                    }
                  });


            }
    
    });

}

}







    

