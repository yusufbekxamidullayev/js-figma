let toggleBtn = document.getElementById("toggleBtn");
let resMenu = document.getElementById(("res-menu"))

toggleBtn.addEventListener("click" , function(){
    resMenu.classList.toggle("translate-y-[-100%]")
})