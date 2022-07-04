var Form = (function(){

    const getAllFieldsOfDOM = document.querySelectorAll('.form .form__input');
    const getAllLabelsOfDOM = document.querySelectorAll('.form label');
    const getFormOfDOM = document.querySelector('.form');

    const expresionesRegulares = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-Z0-9\s_.+-,]{3,100}$/
    }

    const validation = {
        nombre: false,
        email: false,
        mensaje: false
    }

    function _efectoLabel(){

       getAllFieldsOfDOM.forEach((data)=>{

            data.addEventListener('focus', reUseAnimation);
            data.addEventListener('blur', removeBlur);

            function reUseAnimation(){
                let nextElementSiblig = data.nextElementSibling;

                getAllLabelsOfDOM.forEach((data)=>{
                    data.classList.remove('active');
                });

                data.addEventListener('keyup', ()=>{
                    let dataValue = data.value;
                    if(dataValue.length > 0){
                        nextElementSiblig.classList.add('active-keyup');
                    }else{
                        nextElementSiblig.classList.remove('active-keyup');
                    }
                });

                nextElementSiblig.classList.add('active');
            }

            function removeBlur(){
                getAllLabelsOfDOM.forEach((data)=>{
                    data.classList.remove('active');
                });
            }
       });

    }

    //VALIDACION DEL FORM

    function _validarForm(){
        
        function reUseValidationInput(expresion, tar, bloque){
            if(expresion.test(tar.value)){
                document.querySelector(`.form__bloque--${bloque}`).classList.add('form__bloque--bien');
                document.querySelector(`.form__bloque--${bloque}`).classList.remove('form__bloque--mal');

                validation[bloque] = true;
            }else{
                document.querySelector(`.form__bloque--${bloque}`).classList.remove('form__bloque--bien');
                document.querySelector(`.form__bloque--${bloque}`).classList.add('form__bloque--mal');
                validation[bloque] = false;
            }  
        }


        function validationInput(e){
            switch (e.target.name) {
                case 'nombre':
                    reUseValidationInput(expresionesRegulares.nombre, e.target, 'nombre');
                break;
                case 'email':
                    reUseValidationInput(expresionesRegulares.email, e.target, 'email');
                break;
                case 'mensaje':
                    reUseValidationInput(expresionesRegulares.mensaje, e.target, 'mensaje');
                break;
            }
        }

        getAllFieldsOfDOM.forEach((data)=>{
            data.addEventListener('blur', validationInput);
            data.addEventListener('keyup', validationInput);
        });

        getFormOfDOM.addEventListener('submit', (e)=>{
            e.preventDefault();

            if(validation.email && validation.nombre && validation.mensaje){

                fetch('../jhosuaTheme/conexiones/form.php')
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data);
                        window.location.href = '../jhosuaTheme/templates/gracias.php';
                    });

            }else{
                let getMensajeError = document.querySelector('.form__error');

                getMensajeError.classList.add('active');
                setTimeout(()=>{
                    getMensajeError.classList.remove('active');
                }, 3000)
            }

        });
    }


    return{
        setHandleEvent: function(){
            _efectoLabel()
            _validarForm()
        }
    }

})();


const loadFormHandlers = () =>{
    Form.setHandleEvent()
}

export{
    loadFormHandlers
}