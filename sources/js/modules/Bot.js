var Bot = (function(){

    const getBot = document.querySelector('.bot');
    const getFirtsContainerBot = document.querySelector('.bot__bloque--firts');
    const getSecondContainerBot = document.querySelector('.bot__bloque--second');

    function _bienvenidaBot(){
        var getMensajeBienvenida = document.querySelector('.bot__bloque--firts__left');
        var getBloqueRight = document.querySelector('.bot__bloque--firts__right');

        setTimeout(()=>{    
            getFirtsContainerBot.classList.add('active');
        },2000 );

        //remove mensaje bienvenida
        setTimeout(()=>{
            getMensajeBienvenida.classList.add('hidden');
            getBloqueRight.classList.add('active');
        },5000);

    }

    function _scrollForm(){
        var getBotFormBloque = document.querySelector('.bot-form__bloque');
        var scrollHeightFormBloque = getBotFormBloque.scrollHeight;

        getBotFormBloque .scroll(0, scrollHeightFormBloque);
    }

    function _openBot(){

        function showMensajes(){
            var getAllFormBloque = document.querySelectorAll('.bot-form__bloque .bot-form__mensaje--animation');
            var getMensajeForTyping = document.querySelector('.bot-form__mensaje--typing');
    
            getAllFormBloque.forEach((data, indice)=>{
                data.classList.add('active');
                data.style.animation = `2s mensaje forwards 1 ${indice * 2.5 + "s"}`;
                getMensajeForTyping.style.animation = `2s typingHidden forwards 1 ${indice * 2.5 + "s"}`;
            });
    
        }

        getFirtsContainerBot.addEventListener('click', ()=>{
            getSecondContainerBot.classList.add('active');
            showMensajes();
        });
    }

    function _closeBot(){
        var getButtonCloseBot = document.querySelector('.bot-form__close');

        getButtonCloseBot.addEventListener('click', ()=>{
            getSecondContainerBot.classList.remove('active');
        });
    }


    return{
        setHandleEvent: function(){
            _bienvenidaBot()
            _scrollForm()
            _openBot()
            _closeBot()
        }
    }


})();


const loadBotHandlers = ()=>{
    Bot.setHandleEvent()
}

export{
    loadBotHandlers
}