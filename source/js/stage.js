// header
function initWater () {
  var settings = {
    image: '../images/default-header.jpg',
    rippleRadius: 2,
    width: 1000,
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

window.onload = function () {
  initWater()
}
