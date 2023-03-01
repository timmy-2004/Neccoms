const form = document.querySelector('form');

const BASE_URL = 'http://localhost:3005/api/members'


form.addEventListener('submit', async event => {
  event.preventDefault();

 const email = document.querySelector('#email').value; 
 const fname = document.querySelector('#fullName').value; 
 const phoneNumber = document.querySelector('#phoneNumber').value; 
 const origin = document.querySelector('#origin').value; 
 const dob = document.querySelector('#dob').value; 
 const pob = document.querySelector('#pob').value; 
 const gender = document.querySelector('#gender').value; 
 const maritalStatus = document.querySelector('#maritalStatus').value; 
 const spouseName = document.querySelector('#spouseName').value; 
 const spouseNumber = document.querySelector('#spouseNumber').value; 
 const langSpoken = document.querySelector('#langSpoken').value; 
 const langWritten = document.querySelector('#langWritten').value; 
 const cond = document.querySelector('#cond').value; 
 const condtype = document.querySelector('#condtype').value; 
 const testimony = document.querySelector('#testimony').value; 
 const mem = document.querySelector('#mem').value; 
 
 const userAction = async () => {
    const response = await fetch(`${BASE_URL}/register`,  {
     method: 'POST',
      body: JSON.stringify({
        email: email,
        fullName: fname,
        phoneNumber: phoneNumber,
        stateOfOrigin:origin,
        dateOfBirth: dob,
        placeOfBirth:pob,
        sex:gender,
        maritalStatus:maritalStatus,
        spouseName:spouseName,
        spouseNumber:spouseNumber,
        languageSpoken: langSpoken,
        languageWritten:langWritten,
        healthIssue:cond,
        typeOfHealthIssue:condtype,
        testimony : testimony,
        member :mem
      }), // string or object
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    // console.log(body)
   
  }
  

   await userAction();
//   register();
  form.reset();
});
 

