// 

const headingTag = document.getElementsByTagName('h1')
const changeBtn = document.getElementById("changeBtn"); //important
const headingByClass = document.getElementsByClassName('heading') //important
// const alertBtn = document.getElementsByName('alertBtn') //get the elements with their name
const anotherOne = document.querySelector('.other') //select an item with their unique value..like id (#other),class(.other),tag(h1) it select the first element with the selector //important
const finalOne = document.querySelectorAll('.other') //select all elements with the selector //important



const queryBtn = document.querySelectorAll("button");
console.log(queryBtn)

// const headingArr = [...headingByClass]

// const handleBtnClick = () => {
//     console.log('clicked')
//        headingArr.forEach(item => item.innerText = "changed by button click");
// }

// const  handleBtnHover = () => {
//     console.log('button hover');
// }

// changeBtn.addEventListener("click",handleBtnClick)
// changeBtn.addEventListener("hover",handleBtnHover)


// console.log(alertBtn)



// // 
// alertBtn[0].addEventListener("click",() =>{
//     alert("clicked")
// })



queryBtn[1].addEventListener('click',()=>{
    alert("clicked")
})