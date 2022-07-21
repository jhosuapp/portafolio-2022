var Bot = (function(){

    const getFormOfBot = document.querySelector('#bot-form');
    const getInputRespuesta = document.querySelector('#respuesta');
    const getButtonSend = document.querySelector('#bot-form__send');
    const getBloqueRespuesta = document.querySelector('#bot-form__bloque-respuesta');
    const getFirtsContainerBot = document.querySelector('.bot__bloque--firts');
    const getSecondContainerBot = document.querySelector('.bot__bloque--second');
    const getMensajeValidation = document.querySelector('.bot-validacion');
    const getTextContetValidation = document.querySelector('.bot-validacion p');
    const getAllInputsWithValue = document.querySelectorAll('.valuesForSend');

    const expresionesRegularesBot = {
        nombreBot: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        emailBot: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensajeBot: /^[a-zA-Z0-9\s_.+-,]{3,100}$/
    }   

    const estadoExpresiones = {
        nombreBot: false,
        emailBot: false,
        mensajeBot: false
    }

    function _bienvenidaBot(){
        var getMensajeBienvenida = document.querySelector('.bot__bloque--firts__left');
        var getBloqueRight = document.querySelector('.bot__bloque--firts__right');


        setTimeout(()=>{    
            getFirtsContainerBot.classList.add('active');
        },2000);

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

                getBloqueRespuesta.classList.remove('disable');

            });

        });

    }

    //VALIDACION DE ENVIO Y VALIDACION DE DATOS


    function _validationContentData(){
        
        function reUseValidacionExpresiones(expresion, tar, bloque){
            if(expresion.test(tar.value)){
                estadoExpresiones[bloque] = true;
            }else{
                estadoExpresiones[bloque] = false;
            }  
        }

        function validacionExpresiones(e){
            switch (e.target.name) {
                case 'nombreBot':
                    reUseValidacionExpresiones(expresionesRegularesBot.nombreBot, e.target, 'nombreBot');
                break;
                case 'emailBot':
                    reUseValidacionExpresiones(expresionesRegularesBot.emailBot, e.target, 'emailBot');
                break;
                case 'mensajeBot':
                    reUseValidacionExpresiones(expresionesRegularesBot.mensajeBot, e.target, 'mensajeBot');
                break;
            }
        }

        getInputRespuesta.addEventListener('keyup', validacionExpresiones);

    }


    function _funcionalidadForm(){

        //SE INICIALIZA ARRAY EN EL CUAL SE VAN A GUARDAR LOS DATOS PERSONALES
        var arrayWithDataForm = [];


        getFormOfBot.addEventListener('submit', (e)=>{

            var getValueInputRespuesta = getInputRespuesta.value;

            //CREAMOS FUNCION PARA REUTLIZAR LAS VALIDACIONES CON EXPRESIONES REGULARES
            function reUseDataTypeInput(expresion, inputName, texto){
                if(expresion){
    
                    arrayWithDataForm.push(getValueInputRespuesta);
                    getMensajeValidation.classList.remove('active');
                    getInputRespuesta.setAttribute('name', inputName);
                    getInputRespuesta.value = "";
                } else{
    
                    getTextContetValidation.textContent = texto;
                    getMensajeValidation.classList.add('active');
                }
            }

            
            switch (arrayWithDataForm.length){
                case 0:
                    reUseDataTypeInput(estadoExpresiones.nombreBot, 'emailBot', 'Por favor ingrese un nombre valido, las única expresiones validas son las tildes');
                break;
                case 1:
                    reUseDataTypeInput(estadoExpresiones.emailBot, 'mensajeBot', 'Por favor ingrese un correo valido');
                break;
                case 2:
                    reUseDataTypeInput(estadoExpresiones.mensajeBot, 'termine', 'Por favor ingrese un mensaje valido');
                break;
                default:
                    alert('no me hackee hpta');
                break;
            }

            if(estadoExpresiones.nombreBot && estadoExpresiones.mensajeBot && estadoExpresiones.emailBot){

                //ASIGNAMOS LOS VALUES A LOS INPUTS FINALES
                getAllInputsWithValue.forEach((data, indice)=>{
                    data.value = arrayWithDataForm[indice];
                });

                //ALMACENAMOS LA DATA DE LOS INPUTS
                let getDataoFform = new FormData(getFormOfBot);

                //ENVIAMOS LOS DATOS DEL FORMLARIO AL BACKEND
                fetch('../jhosuaTheme/conexiones/bot.php', {
                        method: 'POST',
                        body: getDataoFform
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                });
                
            }

            //NO RECARGAR LA PAGINA
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
            _validationContentData()
        }
    }


})();


const loadBotHandlers = ()=>{
    Bot.setHandleEvent()
}

export{
    loadBotHandlers
}