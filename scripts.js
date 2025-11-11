const btn01 = document.getElementById("btn01")

const todosBtn = [...document.querySelectorAll(".btn-icon")]

btn01.addEventListener("click", () => {
    todosBtn.map((ele, posi) => {
        let btn = ele
        btn.classList.toggle("ativo")
    })
})