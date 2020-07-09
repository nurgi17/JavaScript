// 1. Grab the input value
var button = document.querySelector('.js-go')
button.addEventListener('click', () => {
    var input = document.querySelector('input').value
    search(input)
})

var input1 = document.querySelector('.js-userinput')
input1.addEventListener('keyup', (e) => {
    var input = document.querySelector('input').value
    if (e.which === 13) {
      search(input)
    }
})

function search (req) {
  var url = `https://api.giphy.com/v1/gifs/search?q=${req}&api_key=dc6zaTOxFJmzC`

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest()
  GiphyAJAXCall.open( 'GET', url )
  GiphyAJAXCall.send()
  
  GiphyAJAXCall.addEventListener('load', (e) => {
  
    var data = e.target.response
    pushToDOM(data)
  
  })
}

function pushToDOM (input) {
    var response = JSON.parse(input)
    var imageUrls = response.data
    var container = document.querySelector('.js-container')
    container.innerHTML = ''
    imageUrls.forEach((image) => {
      var src = image.images.fixed_height.url
      container.innerHTML += '<img src=\'' + src + '\' class=\'container-image\'>'
    })
}
