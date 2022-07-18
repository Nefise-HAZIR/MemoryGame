const main = document.querySelector(".main");
const levelDesc = document.querySelector("#leveldescription");
const pscore = document.querySelector("#score");
const button = document.querySelector("button");
const move = document.querySelector("#move");
const mode = document.querySelector("#mode");

let image = ["img/1.png", "img/1.png", "img/2.png", "img/2.png", "img/3.jpg", "img/3.jpg", "img/4.jpg", "img/4.jpg", "img/5.jpg", "img/5.jpg", "img/6.jpg", "img/6.jpg", "img/7.jpg", "img/7.jpg", "img/8.jpg", "img/8.jpg"];

let moveCount = 0;
let score = 0;
let dim = 90;
let width = 500;

function drawboard() {
    main.style.width = width + "px";
    levelDesc.style.display = "block";

    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = dim + "px";
        square.style.height = dim + "px";
        main.appendChild(square);
    }

    const squares = document.querySelectorAll(".main .square");
    let count = 0;
    let innerCount = [];

    while (0 < image.length) {
        let random = Math.floor(Math.random(0, 16) * image.length);
        innerCount.push(image[random]);
        console.log(innerCount);
        if (random !== -1) {
            image.splice(random, 1);
        }
    }

    count = 0;
    for (var i = 0; i < 16; i++) {
        let img = innerCount[i];
        squares[i].setAttribute("src", img);
    }

    let selectedSquares = [];
    squares.forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("rotatesqaure");
            item.innerHTML = `<img src="${item.getAttribute("src")}"></img>`;
            selectedSquares.push(item);

            if (selectedSquares.length === 2) {
                main.style.pointerEvents="none";
                moveCount++;
                move.textContent = moveCount;
                if (moveCount > 10) {
                    score -= 5;
                    pscore.textContent = score;
                }

                if (selectedSquares[0].getAttribute("src") === selectedSquares[1].getAttribute("src")) {
                    setTimeout(() => {
                        selectedSquares[0].style.background = "none";
                        selectedSquares[1].style.background = "none";
                        selectedSquares[0].innerHTML = "";
                        e.target.innerHTML = ""
                    }, 500)

                    score += 10;
                    pscore.textContent = score;
                    count++;
                    if (count === (squares.length) / 2) {
                        levelDesc.style.display = "none";
                        main.innerHTML = "";
                        let card = document.createElement("div");
                        let buton = document.createElement("button");
                        let sc = document.createElement("div"); //score
                        sc.classList.add("card");
                        sc.textContent = "Puanınız:" + score;
                        buton.classList.add("buton");
                        buton.innerHTML = "tekrar oyna"
                        card.style.transition = "0.3s ease"
                        card.innerHTML = "tebrikler başardınız"
                        card.classList.add("card");

                        buton.addEventListener("click", e => {
                            main.innerHTML = "";
                            pscore.textContent = 0;
                            image = ["img/1.png", "img/1.png", "img/2.png", "img/2.png", "img/3.jpg", "img/3.jpg", "img/4.jpg", "img/4.jpg", "img/5.jpg", "img/5.jpg", "img/6.jpg", "img/6.jpg", "img/7.jpg", "img/7.jpg", "img/8.jpg", "img/8.jpg"];
                            moveCount = 0;
                            move.textContent = moveCount;
                            drawboard();
                        })

                        main.append(card);
                        main.append(buton);
                        main.append(sc);
                    }
                }
                else {

                    setTimeout(() => {
                        selectedSquares[0].classList.toggle("rotatesqaure");
                        selectedSquares[1].classList.toggle("rotatesqaure");
                        selectedSquares[0].innerHTML = "";
                        e.target.innerHTML = ""
                        selectedSquares = [];
                    }, 500)
                }
                setTimeout(() => {
                    main.style.pointerEvents="all";
                    selectedSquares = [];
                }, 500)
            }
        })
    })
}
button.addEventListener("click", e => {
    main.innerHTML = "";
    pscore.textContent = 0;
    image = ["img/1.png", "img/1.png", "img/2.png", "img/2.png", "img/3.jpg", "img/3.jpg", "img/4.jpg", "img/4.jpg", "img/5.jpg", "img/5.jpg", "img/6.jpg", "img/6.jpg", "img/7.jpg", "img/7.jpg", "img/8.jpg", "img/8.jpg"];
    moveCount = 0;
    move.textContent = moveCount;
    drawboard();
})

drawboard();




