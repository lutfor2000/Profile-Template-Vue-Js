let manuIcon = document.querySelector("#menu-icon");
let naverManu = document.querySelector(".navbar");

manuIcon.addEventListener('click', ()=>{
    manuIcon.classList.toggle('fa-xmark');
    naverManu.classList.toggle('active');
});