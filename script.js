const initFile = 'contributions.json'
const pre = document.querySelector('pre')
const templateContent = document.querySelector('#tml').content
const container = document.querySelector('#container')

window.addEventListener('hashchange', (event) => {
  console.log('Hash changed:', window.location.hash.substring(1))
  getData(window.location.hash.substring(1) + '.json')
})



function test (value) {
  console.log(value)
}
function buildOne(mediaRec) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
  }
  console.log(mediaRec)
  let clone = templateContent.cloneNode(true)
  clone.querySelector('h3').textContent = mediaRec.nom
  // clone.querySelector('.box p').content = mediaRec.key
  container.appendChild(clone)
}

function getData(file) {

  fetch(file)
  .then(response => response.json())
  .then(data => {
    console.table(data[2].data[0])
    // console.log(data[2].data[0].nom)
    buildOne(data[2].data[0])
  }
  
  )
  .catch(error => console.error('Error fetching JSON:', error));
}

getData(initFile)

