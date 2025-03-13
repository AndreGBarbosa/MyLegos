let index = 0;

function moverCarrossel(direcao) {
    const carrossel = document.getElementById("carrossel");
    const items = document.querySelectorAll(".item");
    const containerWidth = document.querySelector(".carrossel-Container").offsetWidth;
    const itemWidth = items[0].offsetWidth + 10; 

    const visibleItems = Math.floor(containerWidth / itemWidth);
    const maxIndex = items.length - visibleItems;

    index += direcao;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    carrossel.style.transform = `translateX(${-index * itemWidth}px)`;
}

window.addEventListener("resize", () => {
    index = 0; 
    moverCarrossel(0);
});

let touchStartX = 0;

document.getElementById("carrossel").addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.getElementById("carrossel").addEventListener("touchend", (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        moverCarrossel(1); 
    } else if (touchEndX - touchStartX > 50) {
        moverCarrossel(-1);
    }
});
