var Bot = (function(){

    const getFormOfBot = document.querySelector('#bot-form');
    const getInputRespuesta = document.querySelector('#respuesta');
    const getButtonSend = document.querySelector('#bot-form__send');
    const getBloqueRespuesta = document.querySelector('#bot-form__bloque-respuesta');
    const getFirtsContainerBot = document.querySelector('.bot__bloque--firts');
    const getSecondContainerBot = document.querySelector('.bot__bloque--second');


    function _bienvenidaBot(){
        var getMensajeBienvenida = document.querySelector('.bot__bloque--firts__left');
        var getBloqueRight = document.querySelector('.bot__bloque--firts__right');


        setTimeout(()=>{    
            getFirtsContainerBot.classList.add('active');
        },2000 );

        //QUITAR MENSAJE DE BIENVENIDA
        setTimeout(()=>{
            getMensajeBienvenida.classList.add('hidden');
            getBloqueRight.classList.add('active');
        },5000);

    }

    //TODA FUNCIONALIDAD CUANDO SE ABRE EL BOT

    function _openBot(){

        function showMensajes(){
            var getAllFormBloquePrimero = document.querySelectorAll('.bot-form__relative--primero .bot-form__mensaje--animation');
            var getMensajeForTyping = document.querySelector('.bot-form__mensaje--typing');
    

            getAllFormBloquePrimero.forEach((data, indice)=>{
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


    //TODA FUNCIONALIDAD CUANDO SE CIERRA EL BOT

    function _closeBot(){
        var getButtonCloseBot = document.querySelector('.bot-form__close');


        getButtonCloseBot.addEventListener('click', ()=>{
            getSecondContainerBot.classList.remove('active');
        });

    }

    //FUNCIOANLIDAD DEL RADIO BUTTON, ADICIONAL VALIDACIÓN DEL SIGUIENTE MENSAJE

    function _radioButton(){
        var getAllRadioButtonsLabel = document.querySelectorAll('.bot-form__radio__label');
        var getMensajeRadioButton = document.querySelector('.bot-form__mensaje--radio');
        var getRespuestaRadioButton = document.querySelector('.bot-form__respuesta--radio');
        var getRespuestaRadioButtonText = document.querySelector('.bot-form__respuesta--radio p')


        getAllRadioButtonsLabel.forEach((data)=>{

            data.addEventListener('click', ()=>{

                getAllRadioButtonsLabel.forEach((data)=>{
                    data.classList.remove('active');
                });

                data.classList.add('active');

                getMensajeRadioButton.classList.add('hidden');
                
                //RESPUESTA
                getRespuestaRadioButton.classList.add('active');
                getRespuestaRadioButtonText.textContent = data.textContent;


                //HABILITA CAMPO PARA ESCRIBIR RESPUESTA DEL NOMBRE

                getBloqueRespuesta .classList.remove('disable');

            });

        });

    }

    //VALIDACION DE ENVIO Y VALIDACION DE DATOS

    function _funcionalidadForm(){
        var arrayWithDataForm = [];


        //NO RECARGAR LA PAGINA
        getFormOfBot.addEventListener('submit', (e)=>{
            
            var getValueInputRespuesta = getInputRespuesta.value;
            
            arrayWithDataForm.push(getValueInputRespuesta);

            console.log(arrayWithDataForm);
            e.preventDefault();
        });
    }


    return{
        setHandleEvent: function(){
            _bienvenidaBot()
            _openBot()
            _closeBot()
            _radioButton()
            _funcionalidadForm()
        }
    }


})();


const loadBotHandlers = ()=>{
    Bot.setHandleEvent()
}

export{
    loadBotHandlers
}