// 1. Search 

var UI = {}

UI.EnterPress = () => {
  let input = document.querySelector('.js-search')
  input.addEventListener('keyup', (e) => {
    let inputValue = document.querySelector('input')
    if (e.which === 13) {
      SoundCloudAPI.getTrack(inputValue.value)
      inputValue.value = ''
    }
  })
}
UI.EnterPress()

UI.SubmitClick = () => {
  let button = document.querySelector('.js-submit')
  button.addEventListener('click', () => {
    var inputValue = document.querySelector('input')
    SoundCloudAPI.getTrack(inputValue.value)
    inputValue.value = ''
  })
}
UI.SubmitClick()

UI.ClearPlaylist = () => {
  let but = document.querySelector('.js-button')
  but.addEventListener('click', () => {
    localStorage.clear()
    var sideBar = document.querySelector('.js-playlist')
    sideBar.innerHTML = ''
  })
}
UI.ClearPlaylist()
// 2. Query SoundCloud API ---------------------------------------------------------------------------

var SoundCloudAPI = {}

SoundCloudAPI.init = () => {
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  })
}
SoundCloudAPI.init()

SoundCloudAPI.getTrack = (inputValue) => {
  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: inputValue
  }).then((tracks) => {
    SoundCloudAPI.renderTracks(tracks)
  })
}

// 3. Display the cards ---------------------------------------------------------------------------
SoundCloudAPI.renderTracks = (tracks) => {
  var searchResults = document.querySelector('.js-search-results')
  searchResults.innerHTML = ''
  tracks.forEach((track) => {
    //card  
    var card = document.createElement('div')
    card.classList.add('card')
    //image
    var imageDiv = document.createElement('div')
    imageDiv.classList.add('image')

    var image_img = document.createElement('img')
    image_img.classList.add('image_img')
    image_img.src = track.artwork_url
    
    imageDiv.appendChild(image_img)
    

    //content
    var content = document.createElement('div')
    content.classList.add('content')

    var header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = `<a href="${track.permalink_url}" target="_blank">"${track.title}"</a>`

    //button
    var button = document.createElement('div')
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button')

    var icon = document.createElement('i')
    icon.classList.add('add', 'icon')

    var buttonText = document.createElement('span')
    buttonText.innerHTML = 'Add to playlist'

    //appendChild
    content.appendChild(header)

    button.appendChild(icon)
    button.appendChild(buttonText)
    button.addEventListener('click', () => {
      SoundCloudAPI.getEmbed(track.permalink_url)
    })
    card.appendChild(imageDiv)
    card.appendChild(content)
    card.appendChild(button)
    
    var searchResults = document.querySelector('.js-search-results')
    searchResults.appendChild(card)
  })
}

// 4. Add to playlist and play ---------------------------------------------------------------------------
SoundCloudAPI.getEmbed = (trackURL) => {
  SC.oEmbed(trackURL, {
    auto_play: true
  }).then((embed) => {
    console.log('oEmbed response: ', embed)
    var sideBar = document.querySelector('.js-playlist')
    
    var box = document.createElement('div')
    box.innerHTML = embed.html
    
    sideBar.insertBefore(box, sideBar.firstChild)
    localStorage.setItem('key', sideBar.innerHTML)
  })
}
var sideBar = document.querySelector('.js-playlist')
sideBar.innerHTML = localStorage.getItem('key')

