function toggleMenu() {
    let menu = document.getElementById("side-menu")
    let menuIcon = document.getElementsByClassName("meni")

    if(menu.style.right === "0px") {

        menu.style.right = '-250px'
        menuIcon.style.display = 'block'
        
    } else{
        menu.style.right = '0px'
        menuIcon.style.display = 'none'
    }
}




function toggleHome() {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

