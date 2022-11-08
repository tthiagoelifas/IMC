export const Modal = {
  warpper: document.querySelector('.modal-warpper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),


  open() {
    Modal.warpper.classList.add('open')
  },
  close() {
    Modal.warpper.classList.remove('open')
  },
}

Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
   Modal.close()
  }
})