 let left = document.querySelector(".contener .content .left");
let right = document.querySelector(".contener .content .right");
let open_sound = new Audio("./mixkit-scary-wooden-door-opening-190.wav");

window.onload = () => {
    
   
        left.parentElement.onclick = ( ) => {
            
            left.classList.add("openl");
            right.classList.add("openr");
            setTimeout( () => {
              open_sound.play()
            },1000);
            };
    
}; 