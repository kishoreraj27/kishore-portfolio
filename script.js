// Smooth Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 0 20px rgba(0,217,255,0.15)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});