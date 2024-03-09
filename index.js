var x=document.querySelectorAll(".drum").length;
// we cannot use querySelectorAll because it returns NodeList not a single element
//handleclick will be invoked when the button is clicked but if we write handleclick() automatically function called 
for(var i=0;i<x;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",xyz);
}
function xyz() {
    var buttonInnerHtml=this.innerHTML;
    keypressi(buttonInnerHtml);
    button_animation(buttonInnerHtml);
}
// this above is implimented by using a nameing function.



// for(var i=0;i<x;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         var button_press= this.innerHTML;
//         switch (button_press) {
//             case "w":
//                 var tom1= new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 var tom2= new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "s":
//                 var tom3= new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "d":
//                 var tom4= new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             case "j":
//                 var snare= new Audio("sounds/snare.mp3");
//                 snare.play();    
//                 break;
//             case "k":
//                 var crash= new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "l":
//                 var kick= new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
//             default:
//                 break;
//         };
//     })
// }
// this above is type of annonymous implimentation

// after implmenting loop we only added eventlistener to all the drum.so whenever drum is clicked action performs.
// here we are adding a annonymous function within annoymous function we can write the code which has to be executed.
// Annonymous function means function having no name sohave have to write funcion()
  
document.addEventListener("keydown",function (e){
    keypressi(e.key);
    button_animation(e.key);
});
// The (e) within the parentheses of the anonymous function is specifying a parameter 
// named e which represents the event object passed to the function when it's called
function keypressi(key){
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();    
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    };
}
// if we are writting anonymouse function then we can pass argument as parameter it will not called automatically 
// because here we are passing a reference but
// in naming function it will called automatically bcz we pass function.


function button_animation(value)
{
    var v=document.querySelector("."+value);
    v.classList.add("pressed");
    setTimeout(function(){
        v.classList.remove("pressed");
    },100);
}