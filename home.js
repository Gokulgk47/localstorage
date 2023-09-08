function login(){
   var username=document.getElementById('user').value;
   localStorage.setItem('UserName',username);
   window.location='./emphome.html';
   
}