const btn01 = document.getElementById("btn01")
// const btn01on = document.getElementById("btn01on")
const icon01 = document.getElementsByClassName("icon01")
const icon02 = document.getElementsByClassName("icon02")

const todosBtn = [...document.querySelectorAll(".btn-icon")]


btn01.addEventListener("click", (evt) => {

    todosBtn.map((ele, posi) => {
        let btn = ele
        btn.classList.toggle("ativo")
    })
})