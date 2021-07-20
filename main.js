const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images adding each to thumbbar */
for(let i = 1; i < 6; i++){
const newImage = document.createElement('img');
let imageLocation = "images/pic" + i.toString() + ".jpg";
newImage.setAttribute('src', imageLocation);
thumbBar.appendChild(newImage);
newImage.addEventListener('click',(e)=>{
    displayedImage.src = e.target.src;
})
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',(e)=>{
    if(btn.getAttribute('class') === "dark"){
        btn.setAttribute('class', 'light');
        btn.innerText = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if(btn.getAttribute('class') === "light"){
        btn.setAttribute('class','dark');
        btn.innerText = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    };
});

