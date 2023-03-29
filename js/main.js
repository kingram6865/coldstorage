const docReferrer = document.createElement('div')
const apiCode = document.createElement('div')

docReferrer.className = 'was-referred'
apiCode.className = "api-code"

document.getElementsByClassName('datetime')[0].innerHTML = `&copy; sdl.org ${new Date().getFullYear()}`

// console.log("Referred by", document.referrer)
if (document.referrer === 'https://steamcommunity.com/' || (/code\=/.test(document.location.href))) {
  docReferrer.innerText = document.referrer
  apiCode.innerHTML = `<h2>${window.location.href.split('?')[1].split('&')[0].split('=')[1]}</h2>`
  document.getElementsByClassName('main')[0].appendChild(docReferrer)
  document.getElementsByClassName('main')[0].appendChild(apiCode)
}

function buildPage() {
  const destination = document.getElementsByClassName('main')[0]
  const input1destination = document.getElementsByClassName('client-container')[0]
  const input2destination = document.getElementsByClassName('secret-container')[0]
  const buttonDestination = document.getElementsByClassName('button-container')[0]

  const button1 = document.createElement('button')
  const button2 = document.createElement('button')
  const authClient = document.createElement('input')
  const clientLabel = document.createElement('label')

  button1.className = 'bungie-auth'
  button1.textContent = 'Get Authorization'
  button2.className = 'reset'
  button2.textContent = 'Reset'


  authClient.size = '35'
  authClient.name = 'client'
  authClient.id = 'client'
  authClient.type = 'text'

  clientLabel.for = 'client'
  clientLabel.textContent = 'Portal Client ID:'

  button1.addEventListener('click', async (evt) => {
    // let clientId = document.getElementById('client').value
    let clientId = 40364
    let state = stateString(24)
    window.location = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code&state=${state}`
  })

  button2.addEventListener('click', (evt) => {
    window.location.replace("https://sdl.org/coldstorage/")
  })


  const mainComponents = [clientLabel, authClient, button1, button2]
  
  mainComponents.forEach(component => {
    destination.appendChild(component)
  })

}

function stateString(strLength) {
  let random_string = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < strLength; i++) {
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return random_string
}

function refreshToken() {
  let apiToken = document.getElementById('secret').value


}

buildPage()