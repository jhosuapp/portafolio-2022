<div class="bot">
    <div class="bot__bloque--firts">
        <div class="bot__bloque--firts__left">
            <p class="bot__bienvenida">¡Hola! ¿Cómo puedo ayudarte?</p>
            <div class="bot__triangulo"></div>
        </div>
        <div class="bot__bloque--firts__right">
            <img src="../jhosuaTheme/img/avatar.png" alt="" class="bot__imagen">
        </div>
    </div>
    <div class="bot__bloque--second">
        <div class="bot-form__top">
            <div class="bot-form__top--left">
                <img src="../jhosuaTheme/img/avatar.png" alt="" class="bot-form__imagen">
                <p class="bot-form__nombre">Jhosua</p>
            </div>
            <div class="bot-form__close">
            </div>
        </div>

        <!-- MENSAJE PARA VALIDAR LAS EXPRESIONES REGULARES -->

        <div class="bot-validacion">
            <p class="bot-validacion__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.</p>
        </div>

        <form class="bot-form" id="bot-form">
            <div class="bot-form__bloque">

                <!-- PRIMER BLOQUE DE PRESENTACION -->

                <div class="bot-form__relative bot-form__relative--primero">
                    <div class="bot-form__mensaje bot-form__mensaje--animation">
                        <p>¡Hola!</p>
                    </div>
                    <div class="bot-form__mensaje bot-form__mensaje--animation">
                        <p>Mi nombre es <b>Jhosua</b> y actualmente soy desarrollador front-end</p>
                    </div>
                    <div class="bot-form__mensaje bot-form__mensaje--animation">
                        <p>¿En qué estas interesado?</p>
                    </div>

                    <!-- BLOQUE RADIO -->

                    <div class="bot-form__mensaje bot-form__mensaje--animation bot-form__mensaje--radio">
                        <input class="bot-form__radio__input" type="radio" name="interes" id="contratante" value="contrante">
                        <label class="bot-form__radio__label" for="contratante">
                            ¡Quiero contratarte!
                        </label>
                        <input class="bot-form__radio__input" type="radio" name="interes" id="cliente" value="cliente">
                        <label  class="bot-form__radio__label" for="cliente">
                            ¡Tengo un proyecto en mente!
                        </label>
                    </div>
                    
                    <!-- EFECTO TYPING -->

                    <div class="bot-form__mensaje bot-form__mensaje--typing">
                        <div class="bot-form__typing">
                            <div class="bot-form__typing--dot"></div>
                            <div class="bot-form__typing--dot"></div>
                            <div class="bot-form__typing--dot"></div>
                        </div>
                    </div>
                </div>

                <!-- RESPUESTA -->

                <div class="bot-form__respuesta bot-form__respuesta--radio">
                    <div class="bot-form__respuesta--bloque">
                        <p></p>
                    </div>
                </div>

                <!-- SEGUNDO BLOQUE DE NOMBRE -->

                <div class="bot-form__relative bot-form__relative--segundo">
                    <div class="bot-form__mensaje bot-form__mensaje--animation">
                        <p></p>
                    </div>
                    <div class="bot-form__mensaje bot-form__mensaje--animation">
                        <p>¿Cuál es tu nombre <b>completo</b></p>
                    </div>
                    
                    <!-- EFECTO TYPING -->

                    <div class="bot-form__mensaje bot-form__mensaje--typing">
                        <div class="bot-form__typing">
                            <div class="bot-form__typing--dot"></div>
                            <div class="bot-form__typing--dot"></div>
                            <div class="bot-form__typing--dot"></div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- INPUTS CON LOS VALUES -->

            <input type="hidden" id="nombreBotLast" class="valuesForSend" name="nombreBotLast">
            <input type="hidden" id="emailBotLast" class="valuesForSend" name="emailBotLast">
            <input type="hidden" id="mensajeBotLast" class="valuesForSend" name="mensajeBotLast">

            <!-- BLOQUE DE RESPUESTA -->

            <div class="bot-form__bloque--bottom bot-form__bloque--bottom--respuesta disable" id="bot-form__bloque-respuesta">
                <input autocomplete="off" name="nombreBot" type="text" placeholder="Escribe tu respuesta aquí" id="respuesta" class="bot-form__input--respuesta">
                <div class="bot-form__send--bloque">
                    <button type="submit" class="bot-form__send" id="bot-form__send">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" class="crt8y2ji"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path></svg>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>