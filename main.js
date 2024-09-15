let name =document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('email');




let datautilusateur
if (localStorage.page != null){
  datautilusateur = JSON.parse(localStorage.page)
}else {
  datautilusateur = [];
};


btn.onclick = function (){
  let data = {
    nom : name.value,
    gmail : email.value,
    keyword : password.value
    
  };
  datautilusateur.push(data);
  console.log(datautilusateur);
  localStorage.setItem('page', JSON.stringify(datautilusateur));
  deletedata()
};
function deletedata() {
  name.value= '',
  email.value= '',
  password.value= ''
};
let btn_signup = document.getElementById('btn-signup');
let btn_login = document.getElementById('btn-login');
let container = document.getElementById('container');
let container_end = document.getElementById('container-end');

btn_signup.onclick = function (){
  container.style.marginLeft = '50%';
  container.style.borderTopLeftRadius = '50%';
  container.style.borderBottomLeftRadius= '50%';
  container.style.borderTopRightRadius ='0';
  container.style.borderBottomRightRadius='0';
  container.style.transformStyle = 'scale3d(1.4,1.4,1.2)';
  container.style.background = 'linear-gradient(to left ,rgb(243, 36, 250),rgb(39, 137, 250) 15%,rgb(96, 231, 255) ,rgb(179, 174, 174))';
  btn_container.innerHTML = 'Login';
};
btn_login.onclick = function (){
  container.style.marginLeft = '0%';
  container.style.borderTopRightRadius = '50%';
  container.style.borderBottomRightRadius= '50%';
  container.style.borderTopLeftRadius ='0';
  container.style.borderBottomLeftRadius='0';
  container.style.transformStyle = 'scale3d(1.4,1.4,1.2)';
  container.style.background = 'linear-gradient(to right ,rgb(243, 36, 250),rgb(39, 137, 250) 15%,rgb(96, 231, 255) ,rgb(179, 174, 174))';
};



  
  