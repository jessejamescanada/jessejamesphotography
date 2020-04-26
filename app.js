const navbar = document.querySelector('.navbar')
const  sticky = navbar.offsetTop;
const topBTN = document.querySelector('.top-btn')

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

// scroll functions
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

function topScroll() {
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBTN.style.display = 'block'
  }else{
    topBTN.style.display = 'none'
  }
}
