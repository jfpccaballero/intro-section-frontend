const menu = document.querySelector(".menu");
const navDk = document.querySelector(".nav-dk");
const close = document.querySelector(".close");
const accordeon = document.querySelectorAll(".accordeon");

close.classList.add("non-active");

accordeon.forEach (acco => {
    acco.onclick = () => {
        if (acco.classList.contains("open")) {
            acco.classList.remove("open");
        } else {
            accordeon.forEach (notActive => {notActive.classList.remove("open");});
            acco.classList.add("open");
        }
    }
});

menu.onclick = () => {
    menu.classList.add("non-active");
    navDk.classList.add("active");
    close.classList.add("active");
}
close.onclick = () => {
    menu.classList.remove("non-active");
    navDk.classList.remove("active");
    close.classList.add("non-active");
}