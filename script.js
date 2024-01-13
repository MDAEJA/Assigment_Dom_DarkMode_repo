let containerVariable = document.getElementById("container");
let button = document.getElementsByClassName("circle")[0];
console.log(button);
let tagButton = document.getElementsByTagName("body")[0];
console.log(tagButton);
let rotate_img = document.getElementsByClassName("imgsec")[0];
let rot = document.getElementsByClassName("imgs")[0];

console.log(rotate_img);
// 
 let indx = 0;
button.addEventListener("click",darkMode);
function darkMode(){
    if(indx % 2 === 0){
        indx ++;
    return button.className = "move",tagButton.className = "darkmode",alert("welcome to DART MODE"),rotate_img.className = "img_rotate";
    
    }
    else{
        indx ++;
        return button.className = "moveback",tagButton.className = "whitemode",alert("welcome BACK"),rot.className = "img_rotate";
        
    }
};
 

