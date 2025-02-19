function createFloatingElement(className, emoji) {
    const element = document.createElement("div");
    element.className = className;
    element.innerText = emoji;
    element.style.position = "absolute";
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.bottom = "-50px";
    element.style.fontSize = Math.random() * 30 + 20 + "px";
    element.style.opacity = 0.8;
    element.style.animation = `floatUp ${Math.random() * 3 + 3}s linear infinite`;

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 4000);
}

setInterval(() => createFloatingElement("heart", "❤"), 800);
setInterval(() => createFloatingElement("balloon", "🎈"), 1200);

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    audio.muted = false;
    audio.play().catch(error => console.log("Autoplay blocked:",error));
});