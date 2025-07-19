function sketch (n) {
    for (let i = 0; i < n*n; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = `pixel`;
        newDiv.style.width = `${100 / n}%`;
        newDiv.style.height = `${100 / n}%`;
        container.appendChild(newDiv);
    };
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.alignItems = "stretch";
    container.style.justifyContent = "centre";
    container.style.width = `${n * 100}px`;
    container.style.height = `${n * 100}px`;
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function () {
        pixel.style.backgroundColor = "red";
    });
});
}
document.getElementById("sketch").addEventListener("click", function() {
    let input = prompt("Please enter Number of boxes (max 100)");
    const res = Math.min(100, Number(input));
    sketch (res)
});
