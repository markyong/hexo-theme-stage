// header
function initWater () {
  var settings = {
    image: '/images/default-header.jpg',
    rippleRadius: 2,
    width: 1020,
    height: 300,
    delay: 1,
    auto: true
  }
  var navImg = document.getElementById('nav-img')
  var waterRippleEffect = new WaterRippleEffect(navImg, settings)
  navImg.addEventListener('click', function (e) {
    var mouseX = e.layerX
    var mouseY = e.layerY
    waterRippleEffect.disturb(mouseX, mouseY)
  })
  navImg.addEventListener('mousemove', function (e) {
    var mouseX = e.layerX
    var mouseY = e.layerY
    waterRippleEffect.disturb(mouseX, mouseY)
  })
}
initWater()


// mobile
function asideSwitch () {
  if(window.innerWidth < 1020) {
    var menu = document.querySelector('.menu')
    var aside = document.getElementById("content-aside")
    if(!aside) return
    document.onclick = function (e) {
      aside.style.left = -252 + 'px'
      e.stopPropagation()
    }
    menu.onclick = function (e) {
      aside.style.left = 0
      e.stopPropagation()
    }
    aside.onclick = function (e) {
      e.stopPropagation()
    }
  }
}
asideSwitch()
window.addEventListener('resize', asideSwitch)