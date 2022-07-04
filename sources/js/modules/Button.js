var Button = (function(){

    function _animateButton(){
        var animateButton = function(e) {
            //reset animation
            e.target.classList.remove('animate');
            
            e.target.classList.add('animate');
            setTimeout(function(){
                e.target.classList.remove('animate');
            },700);
        };
        
        var bubblyButtons = document.getElementsByClassName("bubbly-button");
        
        for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
        }
    }

    return {
        setHandleEvent: function(){
            _animateButton()
        }
    }

})();

const loadButtonHandlers = ()=>{
    Button.setHandleEvent()
}

export{
    loadButtonHandlers
}