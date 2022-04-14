let keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', playNote);
})

function playNote(k) {
  let key = k.target;
  let note = document.getElementById(key.dataset.note);
  key.classList.add('active');
  note.currentTime = 0;
  note.play();
  note.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}

