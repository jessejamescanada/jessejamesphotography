const navbar = document.querySelector('.navbar')
const sticky = navbar.offsetTop

window.addEventListener('scroll', navScroll)
window.addEventListener('scroll', navOpacity)

// Navbar opacity functions
function navOpacity() {
  if (window.scrollY > 150) {
    navbar.style.opacity = 0.9
  } else {
    navbar.style.opacity = 1
  }
}

function navScroll() {
  if (window.scrollY >= 150) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

//
document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy')
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target
          image.src = image.dataset.src
          image.classList.remove('lazy')
          imageObserver.unobserve(image)
        }
      })
    })

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image)
    })
  } else {
    var lazyloadThrottleTimeout
    lazyloadImages = document.querySelectorAll('.lazy')

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout)
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src
            img.classList.remove('lazy')
          }
        })
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload)
          window.removeEventListener('resize', lazyload)
          window.removeEventListener('orientationChange', lazyload)
        }
      }, 20)
    }

    document.addEventListener('scroll', lazyload)
    window.addEventListener('resize', lazyload)
    window.addEventListener('orientationChange', lazyload)
  }
})

// social media
const link = encodeURI(window.location.href)
const msg = encodeURIComponent('Check out this blog by Jesse James Photography')
const title = encodeURIComponent(document.querySelector('title').textContent)

console.log([link, msg, title])
const fb = document.querySelector('.facebook')
fb.href = `https://www.facebook.com/share.php?u=${link}`

const twitter = document.querySelector('.twitter')
twitter.href = `http://twitter.com/share?url=${link}&text=${msg}`
