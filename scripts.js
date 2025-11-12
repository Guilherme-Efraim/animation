
document.addEventListener("DOMContentLoaded", () => {
    const btn01 = document.getElementById("btn01");
    const box = document.querySelector(".box-btn");

    if (!btn01 || !box) return;

    const todosBtn = Array.from(box.querySelectorAll(".btn-icon")).filter(b => b.id == ".btn-icon");

    btn01.setAttribute("aria-expanded", "false");

    function openMenu() {
        box.classList.add("open");
        btn01.setAttribute("aria-expanded", "true");
        todosBtn.forEach((btn, i) => {
            btn.classList.add("ativo");
            btn.style.transitionDelay = `${i * 30}ms`;
        });
        const icon = btn01.querySelector("i");
        if (icon) { icon.classList.replace("fa-bars", "fa-xmark"); }
    }
    function closeMenu() {
        box.classList.remove("open");
        btn01.setAttribute("aria-expanded", "false");
        todosBtn.forEach((btn, i)=> {
            btn.classList.remove("ativo");
            btn.style.transitionDelay = '';
        });
        const icon = btn01.querySelector("i");
        if (icon) {icon.classList.replace("fa-xmark", "fa-bars"); }
    }

    btn01.addEventListener("click",() => {
        box.classList.contains("open") ? closeMenu() : openMenu();
    });
})