const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');
const downloadBtn = document.querySelector('.download-btn');
const form = document.querySelector('#sub-form');
const email = document.querySelector('#email');
const alert = document.querySelector('.alert');

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

  if (email.value.trim().length > 0) {
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        host: `${window.location.protocol}//${window.location.host}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch(error => error)
      .then(response => {
        form.reset();
        modal.style.display = "none";
        alert.style.display = "block"
        setTimeout(function () { alert.style.display = "none"; }, 3000);
      });
  }
}
