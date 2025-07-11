
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){









    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress",function(event){
   makeSound(event.key);

   buttonAnimation(event.key);


});

function makeSound(key) {

   switch (key) {
            case "b":
               var audio = new Audio("sounds/tom-1.mp3")
               audio.play(); 
            break;
            
            case "b":
               var audio = new Audio("sounds/tom-1.mp3")
               audio.play(); 
            break;  

            case "e":
               var audio = new Audio("sounds/tom-2.mp3")
               audio.play(); 
            break;  

            case "a":
               var audio = new Audio("sounds/tom-3.mp3")
               audio.play(); 
            break;  

            case "t":
               var audio = new Audio("sounds/tom-4.mp3")
               audio.play(); 
            break;  

            case "r":
               var audio = new Audio("sounds/crash.mp3")
               audio.play(); 
            break;
            
            case "o":
               var audio = new Audio("sounds/kick-bass.mp3")
               audio.play(); 
            break; 
            
            case "n":
               var audio = new Audio("sounds/snare.mp3")
               audio.play(); 
            break;
            
            default:console.log();
   }
   
}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("."+currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
      activeButton.classList.remove("pressed")
   },100);

}




