// 

const headingTag = document.getElementsByTagName('h1')
const changeBtn = document.getElementById("changeBtn");
const headingByClass = document.getElementsByClassName('heading')
const something = document.getElementsByName('something') //get the elements with their name
const anotherOne = document.querySelector('.other') //select an item with their unique value..like id (#other),class(.other),tag(h1) it select the first element with the selector
const finalOne = document.querySelectorAll('.other') //select all elements with the selector

const headingArr = [...headingByClass]

const handleBtnClick = () => {
    console.log('clicked')
       headingArr.forEach(item => item.innerText = "changed by button click");
}

changeBtn.addEventListener("click",handleBtnClick)




