const form = document.querySelector('form');




form.addEventListener('submit', async event => {
  event.preventDefault();

//  const email = document.querySelector('#email').value; 
 const fname = document.querySelector('#first-name').value; 
 const lname = document.querySelector('#last-name').value; 
 const email = document.querySelector('#email').value; 
 const message = document.querySelector('#message').value; 

 const msg1 = document.querySelector('#mess1')
 const msg2 = document.querySelector('#mess2')
 


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
      alert("You have been registered successfully")
      msg1.innerHTML = "message sent successfully"
     setTimeout(function(){
      msg1.innerHTMl = ""
     },5000)
     form.reset()
  })
  .catch(error => console.error(
    alert("You have been registered successfully")

  , error.message))
   
  }
  
  await userAction()

});
 

