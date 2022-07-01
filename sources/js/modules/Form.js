var Form = (function(){

    const getAllFieldsOfDOM = document.querySelectorAll('.form .form__input');
    const getAllLabelsOfDOM = document.querySelectorAll('.form label');

    function _efectoLabel(){

       getAllFieldsOfDOM.forEach((data)=>{

            data.addEventListener('focus', reUseAnimation);
            data.addEventListener('blur', reUseAnimation);

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
       });

    }


    return{
        setHandleEvent: function(){
            _efectoLabel()
        }
    }

})();


const loadFormHandlers = () =>{
    Form.setHandleEvent()
}

export{
    loadFormHandlers
}