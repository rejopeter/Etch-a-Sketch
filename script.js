//Script for Etch-a-sketch
//function to create grid
function sketch (n) {
    const pixeldx = 100 / n;
    for (let i = 0; i < n*n; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = `pixel`;
        newDiv.style.width = `${pixeldx}%`;
        newDiv.style.height = `${pixeldx}%`;
        container.appendChild(newDiv);
    };
}
//eventlistner- click for sketchpad button
document.getElementById("sketch").addEventListener("click", function() {
    let input = prompt("Please enter Number of pixels (max 100)");
    const res = Math.min(100, Number(input));
    sketch (res)
});
//eventlistner- click for sketch button
document.getElementById("start").addEventListener("click", 
function() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", function () {
        pixel.style.backgroundColor = "black";
    });
});
});
//eventlistner- click for rainbow button
document.getElementById("rainbow").addEventListener("click", 
function rainbowBackgrounds() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        const color = getRandomColor()
        pixel.addEventListener("mouseover", function() {
            pixel.style.backgroundColor = color;
        })
    });
});
//eventlistner- click for erase button
document.getElementById("erase").addEventListener("click", 
function() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function () {
        pixel.style.backgroundColor = null;
    });
    })
});
//eventlistner- click for clear button
document.getElementById("clear").addEventListener("click", 
function clearPixelBackgrounds() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = null;
    });
});
//eventlistner- mouseover shadow for clear button
document.getElementById("clear").addEventListener("mouseover", 
function() {
    document.getElementById("clear").style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
});
document.getElementById("clear").addEventListener("mouseout", 
function() {
    document.getElementById("clear").style.boxShadow = null;
});
//eventlistner- mouseover shadow for rainbow button
document.getElementById("rainbow").addEventListener("mouseover", 
function() {
    document.getElementById("rainbow").style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
});
document.getElementById("rainbow").addEventListener("mouseout", 
function() {
    document.getElementById("rainbow").style.boxShadow = null;
});
//eventlistner- mouseover shadow for erase button
document.getElementById("erase").addEventListener("mouseover", 
function() {
    document.getElementById("erase").style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
});
document.getElementById("erase").addEventListener("mouseout", 
function() {
    document.getElementById("erase").style.boxShadow = null;
});
//eventlistner- mouseover shadow for Sketch pad button
document.getElementById("sketch").addEventListener("mouseover", 
function() {
    document.getElementById("sketch").style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
});
document.getElementById("sketch").addEventListener("mouseout", 
function() {
    document.getElementById("sketch").style.boxShadow = null;
});
//eventlistner- mouseover shadow for Sketch button
document.getElementById("start").addEventListener("mouseover", 
function() {
    document.getElementById("start").style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
});
document.getElementById("start").addEventListener("mouseout", 
function() {
    document.getElementById("start").style.boxShadow = null;
});