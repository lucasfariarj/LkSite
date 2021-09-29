function menu(){

const menu = document.querySelectorAll('li');
const itens = document.querySelectorAll('[data-gallery]')

const active = ((index) => {
    itens.forEach((activeItem)=>{
        activeItem.classList.remove('active')
    })
    itens[index].classList.add('active')
})

menu.forEach((itemMenu,index) => {
    itemMenu.addEventListener('click',function(){
        active(index)
    })
})

}

function digitacao(){

    h1 = document.querySelector('h1');
    
    const digitando = ((element) => {
        const arrayTexto = element.innerHTML.split('');
        element.innerHTML = '';
        arrayTexto.forEach((letra, index) => {
            setTimeout(()=> {
                element.innerHTML += letra;
            },75 * index);
        });
    })

    digitando(h1);
}

menu()
digitacao()