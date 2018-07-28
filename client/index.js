const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');
const downloadBtn = document.querySelector('.download-btn');
const form = document.querySelector('#sub-form');
const email = document.querySelector('#email');

downloadBtn.onclick = () => {
  modal.style.display = "block"
}

closeBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(email.value)
}
