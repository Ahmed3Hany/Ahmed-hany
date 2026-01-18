let nav1 = document.getElementById("navLinks1")
let nav2 = document.getElementById("navLinks2")
let contactH1 = document.querySelector(".contact h1")
let contactP = document.querySelector(".contact p")
function updateSize() {
    const width = window.innerWidth;
    
    if(width > 840){
        nav1.style.display = "flex" 
        nav2.style.display = "flex" 
        contactH1.className = " "
        contactP.className = " "
    }
    else if(width < 840){
        nav1.style.display = "none" 
        nav2.style.display = "none" 
        contactH1.className = "text-center"
        contactP.className = "text-center"
    }
}

function navShowBtn(){
    if(nav1.style.display == "flex" && nav2.style.display == "flex"){
        nav1.style.display = "none" 
        nav2.style.display = "none" 
    }else{
        nav1.style.display = "flex" 
        nav2.style.display = "flex" 
    }
}

// Initial load
updateSize();

// Update on resize
window.addEventListener('resize', updateSize);