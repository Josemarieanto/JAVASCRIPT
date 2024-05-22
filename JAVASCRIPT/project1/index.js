const colors = ["light-blue", "light-green","yellow","red","violet","pink","orange"];

const btn = document.getElementById("btn");
const color = document.querySelector("color");


btn.addEventListener("click",function () {
    const randomNum = getRandomNum();

    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
    
}
)

function getRandomNum() {
    return Math.floor(Math.random()*colors.length);
    
}

