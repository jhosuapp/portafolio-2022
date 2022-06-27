

var NavBar = (function(){
    
    //EVENTO SCROLL
    function _scrollMenu () {
        let navElement = document.querySelector(".header__bottom");
        if(scrollY > 50){
            navElement.classList.add('active');
        }else{
            navElement.classList.remove('active');
        }
    }
    window.addEventListener("scroll", _scrollMenu , false);

    function _hamburguesaEvent(){
        let getHabmgurgerButton = document.querySelector('.hamburguesa');

        getHabmgurgerButton.addEventListener('click', ()=>{
            getHabmgurgerButton.classList.add('active');
        });
    }

    return {
        setHandleEvent: function () {
            _scrollMenu()
            _hamburguesaEvent()
        }
    }

})();




const loadNavBarHandlers = () => {
    NavBar.setHandleEvent()
}

export {
    loadNavBarHandlers
};

