// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener('DOMContentLoaded', function(){
  //add a class to error
  let error = document.querySelector('#modal')
      error.className = 'hidden'

  //add an event to heart 
  let hearts = Array.from(document.querySelectorAll('.like'))
      hearts.forEach(function(heart){
        mimicServerCall()
        .then(function(){
          heart.addEventListener('click', function(){
            heart.classList.toggle('activated-heart')
          })
        })
       .catch(function(errorMessage){
        error.className = " "
        let p = document.querySelector('#modal p').innerText = errorMessage;

        setTimeout(clearError,3000)
        
        function clearError(){
          console.log('You reached me')
        error.className = "hidden"
         }
       })  
        
        
        
      }) 
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
 


