document.getElementsByClassName('datetime')[0].innerHTML = `&copy; sdl.org ${new Date().getFullYear()}`

// console.log(document.getElementsByClassName('datetime')[0])

function buildPage() {
  const destination = document.getElementsByClassName('main')[0]
  const input1destination = document.getElementsByClassName('client-container')[0]
  const input2destination = document.getElementsByClassName('secret-container')[0]
  const buttonDestination = document.getElementsByClassName('button-container')[0]

  const button = document.createElement('button')
  const authSecret = document.createElement('input')
  const authClient = document.createElement('input')
  const secretLabel = document.createElement('label')
  const clientLabel = document.createElement('label')

  button.className = 'bungie-auth'
  button.textContent = 'Get Authorization'

  authSecret.size = '35'
  authClient.size = '35'

  authSecret.name = 'secret'
  authClient.name = 'client'

  authSecret.id = 'secret'
  authClient.id = 'client'

  authSecret.type = 'text'
  authClient.type = 'text'

  secretLabel.for = 'secret'
  secretLabel.textContent = "Token:"
  clientLabel.for = 'client'
  clientLabel.textContent = 'ID:'

  button.addEventListener('click', async (evt) => {
    let clientId = document.getElementById('client').value
    let state = stateString(24)

    const authRequest = {
      response_type: 'code',
      client_id: `${clientId}`,
      state: `${state}`
    }

    try {
      let results = await axios.get(`https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code&state=${state}`)
      console.log(results.data)
    } catch (err) {
      console.log(err)
    }

    alert(`Client ID: ${clientId}, State: ${state}`)
  })

  const mainComponents = [secretLabel, authSecret, clientLabel, authClient, button]
  // destination.appendChild(secretLabel)
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