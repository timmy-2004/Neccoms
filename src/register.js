const form = document.querySelector('form');

const BASE_URL = 'http://localhost:3005/api/members'


form.addEventListener('submit', async event => {
  event.preventDefault();

//  const email = document.querySelector('#email').value; 
 const fname = document.querySelector('#fullName').value; 
 const phoneNumber = document.querySelector('#phoneNumber').value; 
 const origin = document.querySelector('#origin').value; 
 const dob = document.querySelector('#dob').value; 
 const pob = document.querySelector('#pob').value; 
//  const gender = document.querySelector('#gender').value; 
 const maritalStatus = document.querySelector('#maritalStatus').value; 
 const spouseName = document.querySelector('#spouseName').value; 
 const spouseNumber = document.querySelector('#spouseNumber').value; 
 const langSpoken = document.querySelector('#langSpoken').value; 
 const langWritten = document.querySelector('#langWritten').value; 
 const cond = document.querySelector('#cond').value; 
 const condtype = document.querySelector('#condtype').value; 
 const testimony = document.querySelector('#testimony').value; 
 const mem = document.querySelector('#mem').value; 
//  const images = document.querySelector('#profile'); 

//  images.addEventListener('change', (event) => {
//   const image = event.target.files[0];

//   const reader = new FileReader();

//   reader.readAsDataURL(image);
//   console.log(reader)

//   reader.addEventListener('load', () => {
//       localStorage.setItem('image', reader.result);
//   });
// });
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('image', fileField.files[0]);
var imagesUp = ""

const userUpload = async () => {
  fetch('http://localhost:3005/api/file/upload-images', {
  method: "POST",
  body: formData
})
.then(response => response.json())
// console.log(response)
.then(result => {
  // console.log('Success:', result.data);
  imagesUp = result.data
  console.log(imagesUp)
   userAction();

})
.catch(error => {
  console.error('Error:', error);
});

}

 const userAction = async () => {
    const response = await fetch(`${BASE_URL}/register`,  {
     method: 'POST',
      body: JSON.stringify({
        // email: email,
        fullName: fname,
        phoneNumber: phoneNumber,
        stateOfOrigin:origin,
        dateOfBirth: dob,
        placeOfBirth:pob,
        // sex:gender,
        maritalStatus:maritalStatus,
        spouseName:spouseName,
        spouseNumber:spouseNumber,
        languageSpoken: langSpoken,
        languageWritten:langWritten,
        healthIssue:cond,
        typeOfHealthIssue:condtype,
        testimony : testimony,
        member :mem,
        img : imagesUp
      }), // string or object
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      
    })
    // console.log(body)
    .then(response => {
   


      alert("You have been reistered successfully")
      // msg.innerHTML = "Y successfully"
     setTimeout(function(){
      // msg.innerHTMl = ""
     },5000)
     form.reset()
  })
  .catch(error => console.error('Error!', error.message))
   
  }
  
  await userUpload()
//   register();
  // form.reset();
});
 

