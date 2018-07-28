const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');
const downloadBtn = document.querySelector('.download-btn');

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
