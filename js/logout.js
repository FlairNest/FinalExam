function Logout(){
  let Leave = confirm("Хотите выйти из аккаунта?");
  if (Leave){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href="../index.html";
  }
}