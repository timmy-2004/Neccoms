const form = document.querySelector('form');




form.addEventListener('submit', async event => {
  event.preventDefault();

//  const email = document.querySelector('#email').value; 
 const fname = document.querySelector('#first-name').value; 
 const lname = document.querySelector('#last-name').value; 
 const email = document.querySelector('#email').value; 
 const message = document.querySelector('#message').value; 

 const msg = document.querySelector('#mess')
 


 const userAction = async () => {
    const response = await fetch('http://localhost:3005/api/contact/addcontact',  {
     method: 'POST',
      body: JSON.stringify({
        email: email,
        fName: fname,
        lName: lname,
        message :message
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
   
  }
  
  await userAction()

});
 

