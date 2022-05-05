let menuB=document.getElementById("menuB").addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

scrollReveal().reveal('.showcase');
scrollReveal().reveal('.notice', {delay:500});
scrollReveal().reveal('.banner',  {delay:500});
