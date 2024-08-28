// 

const headingTag = document.getElementsByTagName('h1')
const changeBtn = document.getElementById("changeBtn");
const headingByClass = document.getElementsByClassName('heading')

const headingArr = [...headingByClass]





const handleBtnClick = () => {
    console.log('clicked')
       headingArr.forEach(item => item.innerText = "changed by button click");
}

changeBtn.addEventListener("click",handleBtnClick)




