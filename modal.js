var modalWrapper = document.querySelector(".modal--wrapper");
var trigger = document.querySelector(".trigger");
var closeBtn = document.querySelector(".btn-close");

function toggleModal(){
    modalWrapper.classList.toggle("modal--show");
}

function windowOnClick(e){
    if(e.target === modalWrapper){
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);