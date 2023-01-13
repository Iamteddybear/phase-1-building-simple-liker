// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartSpans = document.querySelectorAll('span.like-glyph');
heartSpans.forEach(heartSpan => heartSpan.addEventListener('click', function () {
  mimicServerCall()
    .then((res) => {
      const newTextContent = heartSpan.textContent === FULL_HEART ? EMPTY_HEART : FULL_HEART

      heartSpan.textContent = newTextContent;

      heartSpan.classList.toggle('activated-heart');
    })
    .catch((err) => {
      const errorModal = document.getElementById('modal');
      
      const errorMessageHolder = document.getElementById("modal-message");

      errorModal.classList.remove("hidden");

      errorMessageHolder.textContent = err;

      setTimeout(() => {
        errorModal.classList.add("hidden");

      }, 3000);
    });
}))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
