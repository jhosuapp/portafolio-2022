var Paginador = (function(){

    const getAllCards = document.querySelectorAll('.card');
    const getButtonShowMore = document.querySelector('.card__show-more');

    function _ocultarCards(){

        function reUseOcultarCards(number){
            getAllCards.forEach( (data, indice)=>{
                if(indice > number){
                    data.classList.add('hidden-card');
                }
            });
        }

        reUseOcultarCards(5);

        if(screen.width < 1100 && screen.width > 768){
            reUseOcultarCards(3);
        } 
        if(screen.width < 768){
            reUseOcultarCards(1);
        }

    }

    function _mostrarCards(){

        function reUseMostrarCards(numberOne, numberTwo){

            getButtonShowMore.addEventListener('click', ()=>{

                var getLoader = document.querySelector('.loader__contenedor');
                getLoader.classList.add('active');
            
                window.setTimeout( ()=>{
                    var getAllCardsWithClass = document.querySelectorAll('.hidden-card');
                    getAllCardsWithClass.forEach( (data, indice) =>{
                        if(indice < 0){
                            data.classList.remove('hidden-card');
                        }
                    });
    
                    var  getAllCardsWithClassTwo = document.querySelectorAll('.hidden-card');
                    getAllCardsWithClassTwo.forEach( (data, indice) =>{
                        if(indice < numberOne){
                            data.classList.remove('hidden-card');
                        } 
                    });
    
                    if(getAllCardsWithClassTwo.length < numberTwo){
                        getButtonShowMore.classList.add('hidden-button');
                    }
                    getLoader.classList.remove('active');
                }, 1500);
            });
        }


        if(screen.width < 1100){
            reUseMostrarCards(2, 2);
        } else{
            reUseMostrarCards(3, 3);
        }

    }

    return{
        setHandleEvent: function(){
            _ocultarCards()
            _mostrarCards()
        }
    }

})();

const loadPaginadorHandlers = ()=>{
    Paginador.setHandleEvent()
}

export{
    loadPaginadorHandlers
}