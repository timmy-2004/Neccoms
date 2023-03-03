const email= document.getElementById('em').value
const button = document.querySelector('#button')


const subscribe = async () => {
    button.addEventListener('change', (event) => {
        event.preventDefault();
        const response =  fetch('http://localhost:3005/api/subscribe/subscriber',  {
         method: 'POST',
          body: JSON.stringify({
            email: email,
            
            }), // string or object
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
          
        })
        // console.log(body)
        .then(response => {
          alert("You have been reistered successfully")
          msg.innerHTML = "message sent successfully"
         setTimeout(function(){
          msg.innerHTMl = ""
         },5000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })
  }
  
  await subscribe()