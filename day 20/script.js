// click , change, mouseover , mouseup,mouseout, mousemove

// document.getElementById("changeBtn").onclick = () =>{
//     alert("hello world!");
// };

// const changeBtn = document.getElementById("changeBtn");

// changeBtn.addEventListener('click',()=>{
//     alert("hello world!");
// })

// // step 1: select the element
const box1 = document.getElementById("box1");
// const clickBtn = document.getElementById("clickBtn");
// const demo = document.getElementById("demo");
// // step 2: choose the right event and addEventListener --->mouseenter

// const moveFunc = () => {
//   demo.innerText = Math.round(Math.random() * 10);
// };

// box1.addEventListener("mousemove", moveFunc);

// clickBtn.addEventListener("click", () => {
//   box1.removeEventListener("mousemove", moveFunc);
// });

// box1.addEventListener("mouseleave", () => {
//   clickBtn.innerHTML = "<h1>Mouseleave</h1>";
// });


const colorBtns = [...document.getElementsByClassName('colorBtns')]
const body = document.getElementsByTagName("body");


console.log(colorBtns)

colorBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        console.log(btn)
        body[0].style.backgroundColor = btn.innerText;
    })
})
