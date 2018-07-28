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

  if (email.value.trim().length > 0) {
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: email.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
}
