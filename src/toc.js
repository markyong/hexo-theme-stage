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
inView.offset(47)
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
    animate(href)
    setTimeout(function () {
      handleActive(href)
    }, 370)
    return false
  }
})

// 缓动动画
function animate (el) {
  targetTop = document.querySelector(el).offsetTop + 450 + 47
  clearInterval(timer)
  timer = setInterval(function () {
    var step = (targetTop - bodyScrollTop) / 11
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    bodyScrollTop = bodyScrollTop + step
    window.scrollTo(0, bodyScrollTop)
    if (Math.abs(targetTop - bodyScrollTop) <= Math.abs(step)) {
      window.scrollTo(0, targetTop)
      clearInterval(timer)
    }
  }, 17)
}

function handleActive(href) {
  document.querySelectorAll('.toc-link').forEach(el => {
    el.classList.remove('active')
  })
  document.querySelector(".toc [href='"+ href +"']").classList.add('active')
}
