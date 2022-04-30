 let left = document.querySelector(".contener .content .left");
let right = document.querySelector(".contener .content .right");
let open_sound = new Audio("./mixkit-scary-wooden-door-opening-190.wav");


    
   
        left.parentElement.onclick = ( ) => {
          if(left.classList.contains("openl") && right.classList.contains("openr")){
            
            left.classList.add("closel");
            right.classList.add("closer");
              
            left.classList.remove("openl");
            right.classList.remove("openr");
            
          }
          else{
            left.classList.remove("closel");
            right.classList.remove("closer");
            left.classList.add("openl");
            right.classList.add("openr");
            
          }
            
          
            setTimeout( () => {
              open_sound.play()
            },500)
            };
    
