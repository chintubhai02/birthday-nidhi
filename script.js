const text =
"Every moment becomes beautiful when you are around ✨";

let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}

typingEffect();

function scrollToWish() {
    document.getElementById("wish")
        .scrollIntoView({ behavior: "smooth" });
}

function openGift() {
    document.getElementById("secret").style.display = "block";
}

function createParticles() {

    const emoji = ["✨","⭐","💖","🌸"];

    setInterval(() => {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.innerHTML =
            emoji[Math.floor(Math.random() * emoji.length)];

        particle.style.left =
            Math.random() * window.innerWidth + "px";

        particle.style.fontSize =
            Math.random() * 20 + 20 + "px";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);

    }, 500);
}

createParticles();
