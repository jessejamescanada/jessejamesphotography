const navbar = document.querySelector('.navbar')
const  sticky = navbar.offsetTop;
const topBTN = document.querySelector('.top-btn')
const contactSection = document.getElementById('contact')

window.addEventListener('scroll', navScroll)
window.addEventListener('scroll', navOpacity)
window.addEventListener('scroll', topScroll)
topBTN.addEventListener('click', scrollToTop)


// Navbar opacity functions
function navOpacity(){
  if(window.scrollY > 150){
    navbar.style.opacity = 0.9
  }else{
    navbar.style.opacity = 1
  }
}

function navScroll() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')
  }
}

// scroll functions (commented out section is if you want to replace scrolling to contact with scrolling to top)
function scrollToTop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0
  contactSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}

function topScroll() {
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBTN.style.display = 'block'
  }else{
    topBTN.style.display = 'none'
  }
}
