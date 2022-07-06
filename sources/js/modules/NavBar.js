

var NavBar = (function(){
    
    //EVENTO SCROLL
    function _scrollMenu () {
        let navElement = document.querySelector(".header__left img");

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
        let getCloseButton = document.querySelector('.header__close');

        getHabmgurgerButton.addEventListener('click', ()=>{
            getHabmgurgerButton.classList.add('active');

            setTimeout(()=>{
                navElementMiddle.classList.add('active');
                getCloseButton.classList.add('active');
                getCloseButton.classList.remove('close');
            },500);
        });

        getCloseButton.addEventListener('click', ()=>{
            getCloseButton.classList.add('close');

            setTimeout(()=>{
                navElementMiddle.classList.remove('active');
                getHabmgurgerButton.classList.remove('active');
            },1000);
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

    //LOADER

    function _loader(){
        var getLoaderGeneral = document.querySelector('.loader-general');
        
        setTimeout(()=>{
            getLoaderGeneral.classList.add('hidden');
        },200);
    }
    
    return {
        setHandleEvent: function () {
            _scrollMenu()
            _hamburguesaEvent()
            _idetificador()
            _loader()
        }
    }

})();




const loadNavBarHandlers = () => {
    NavBar.setHandleEvent()
}

export {
    loadNavBarHandlers
};

