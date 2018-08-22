import inView from 'in-view'
var isDown = true,
  oldY = 0,
  timer = 0,
  bodyScrollTop = document.documentElement.scrollTop,
  targetTop = 0
document.addEventListener("scroll", function () {
  var currentY = window.scrollY
  if((oldY - currentY) < 0) {
    isDown = true
  } else {
    isDown = false
  }
  oldY = currentY
  bodyScrollTop = currentY
})
document.querySelectorAll('.toc-link').forEach(function (val) {
  var href = val.getAttribute('href')
  inView(href).on('exit', () => {
    if (isDown) {
      handleActive(href)
    }
  })
  inView(href).on('enter', () => {
    if (!isDown) {
      handleActive(href)
    }
  })
  val.onclick = function () {
    setTimeout(function () {
      handleActive(href)
    }, 577)
    return false
  }
})
var scroll = new SmoothScroll('a[href*="#"]')

function handleActive(href) {
  document.querySelectorAll('.toc-link').forEach(el => {
    el.classList.remove('active')
  })
  document.querySelector(".toc [href='"+ href +"']").classList.add('active')
}

document.querySelector('.menu').style.display = 'none'