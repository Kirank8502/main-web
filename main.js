const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".sidebar").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".sidebar").classList.toggle("toggle");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // selectElement(".nav-list").classList.toggle("active");
        // selectElement(".sidebar").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                document.getElementsByClassName("nav-item").style.width= '1050px';
            }
        })
    })
})