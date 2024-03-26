// JavaScript function to change the content of the lower div
function changeContent(contentType, contentSource, id) {
            
    //setup landing image
    let landingImage = document.getElementById('landing-image');
    
    if(!landingImage.classList.contains('unshow')){
        landingImage.classList.add('unshow');
    }


    let contentFrame = document.getElementById('contentFrame');
    let button = document.getElementById(id);
    console.log(button);
    
    setClickedButton(button);
    if (contentType === 'file') {
        contentFrame.src = contentSource;
    } else if (contentType === 'url') {
        contentFrame.src = contentSource;
    }
}

function showLandingPage(){
    let landingImage = document.getElementById('landing-image');
    let allButtons = document.getElementsByClassName('btn');
    for(let i of allButtons){
        i.style.boxShadow = null;
        i.style.color = "rgb(90, 90, 90)";
        i.style.backgroundColor = null;
    }
    if(landingImage.classList.contains('unshow')){
        landingImage.classList.remove('unshow');
    }
}

function setClickedButton(button){
    let allButtons = document.getElementsByClassName('btn');
    
    for(let i of allButtons){
        i.style.boxShadow = null;
        i.style.color = "rgb(90, 90, 90)";
        i.style.backgroundColor = null;
    }
    button.style.backgroundColor = "rgb(34, 81, 236)";
    button.style.color  = "white";
}

// JavaScript function to resize the iframe when the browser window is resized
function resizeFrame() {
    let upperDivHeight = document.getElementsByClassName('upperDiv').offsetHeight;
    let windowHeight = window.innerHeight;
    //let lowerDiv = document.getElementById('lowerDiv');
    //lowerDiv.style.height = (windowHeight - upperDivHeight) + 'px';
}


// Initial resizing
resizeFrame();


//sidebar functions
let openSidebarEl = document.getElementById("open-sidebar")
const sidebarEl = document.getElementById("sidebar")
const closeSidebarEl = document.getElementById("close-sidebar")
let box = document.querySelector(".box")

openSidebarEl.addEventListener("click",()=>{
    sidebarEl.style.transform = "translate(-20px)";
    sidebarEl.classList.add("active")
})
closeSidebarEl.addEventListener("click",()=>{
    sidebarEl.style.transform = "translate(-320px)";
    sidebarEl.classList.remove("active");
})

document.onclick = function(e){
    console.log(e.target.id);
    if(e.target.id != "sidebar" && e.target.id != "open-sidebar"){
        sidebarEl.style.transform = "translate(-320px)";
        
    }
}

focus();
const listener = window.addEventListener('blur', () => {
    if (document.activeElement === document.querySelector('iframe')) {
        sidebarEl.style.transform = "translate(-320px)";
    }
    window.removeEventListener('blur', listener);
});
