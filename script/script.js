// document.addEventListener('scroll', ()=>{
//     let header = document.querySelector('header');
//     if(window.scrollY > 0){
//         header.classList.add('scrolled');
//     } else{
//         header.classList.remove('scrolled');
//     }
// });
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }