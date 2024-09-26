
/*
function mudaoTamanho() {
   if(window.innerWidth >= 768) {
       itens.style.display = 'block'
    } else{
       itens.style.display ='none'
    }
   }

    function clickMenu() {
   if(itens.style.display == 'block'){ 
       itens.style.display = 'none'
   } else {
       itens.style.display = 'block'
   }

}
*/

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})