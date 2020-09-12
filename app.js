const closeRegister = document.getElementById('quitRegisterForm');
const registerModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('quitLoginForm');
const modal = document.getElementById("modal");
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn')
closeRegister.addEventListener('click', () => modal.style.display = "none");
closeLogin.addEventListener('click', ()=> modal.style.display = "none");
loginBtn.addEventListener('click', function(){
    modal.style.display = "flex";
    loginModal.style.display = "block";
    registerModal.style.display = "none";
})
registerBtn.addEventListener('click', function(){
    modal.style.display = "flex";
    registerModal.style.display = "block";
    loginModal.style.display = "none";
})
