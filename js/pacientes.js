/* Abrir e fechar painel dos pacientes */
const patient = document.getElementsByClassName('patient')

for (let i = 0; i < patient.length; i++) {
  patient[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling

    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}
