const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const closeNav = document.querySelector('#close');

var navLinks = document.getElementById("navLinks");
    function showMenu() {
      if(navLinks.style.right==="-200px" ){
        navLinks.style.right = "0";
      }else{
        navLinks.style.right ="-200px"
      }
    }


  // function opentab() {
  //   for(tablink of tablinks) {
  //     tablink.classList.remove('active-class'); 
  // }

  // event.currentTarget.classList.add('active-class');
  // }