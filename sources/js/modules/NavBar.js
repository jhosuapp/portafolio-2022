

var NavBar = (function(){
    
    //EVENTO SCROLL
    function _scrollMenu () {
        let navElement = document.querySelector(".header__left svg");

        if(scrollY > 50){
            navElement.classList.add('active');
        }else{
            navElement.classList.remove('active');
        }
    }
    window.addEventListener("scroll", _scrollMenu , false);

    //HAMBURGUESA 
    function _hamburguesaEvent(){
        let getHabmgurgerButton = document.querySelector('.hamburguesa');
        let navElementMiddle = document.querySelector('.header__middle');
        
        getHabmgurgerButton.addEventListener('click', ()=>{
            getHabmgurgerButton.classList.add('active');

            setTimeout(()=>{
                navElementMiddle.classList.add('active')
            },500);
        });
    }

    //IDENTIFICADOR PAGINA

    function _idetificador(){
        var getAllItemsOfMenu = document.querySelectorAll('.header__item');

        getAllItemsOfMenu.forEach((data)=>{
            let getAtributeOfItems = data.getAttribute('href');

            let URLactual = window.location.href;

            if(URLactual == getAtributeOfItems){
                data.classList.add('active');
            } 
        });
    }

    
    return {
        setHandleEvent: function () {
            _scrollMenu()
            _hamburguesaEvent()
            _idetificador()
        }
    }

})();




const loadNavBarHandlers = () => {
    NavBar.setHandleEvent()
}

export {
    loadNavBarHandlers
};

