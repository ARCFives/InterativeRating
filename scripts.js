const voto = document.querySelectorAll('.vote')
let votoRealizado = false

function removerClass() {
  voto.forEach(note => note.classList.remove('active'))
}

voto.forEach(note => {
  note.addEventListener('click', () => {
    removerClass()
    note.classList.add('active')

    rateVote.innerHTML = `${note.value}`
    votoRealizado = true
  })
})

submit.addEventListener('click', () => {
  if (votoRealizado == false) {
    alert('Please vote')
    return
  }
  cardRating.style.display = 'none'
  cardThanks.style.display = 'flex'
})
