<?php include 'header.php' ?>

<section class="banner">
    <div class="banner__absolute"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.90,93.25 C181.94,246.21 543.11,7.41 516.59,-45.89 L499.10,-5.42 L0.00,0.00 Z" style="stroke: none; fill: #c2e5fd;"></path></svg></div>
    <div class="banner__bloque contenedor contenedor--bottom contenedor--padding">
        <div class="banner__left">
            <h3 class="subtitulo banner__subtitulo">Lorem ipsum dolor sit</h3>
            <h1 class="titulo titulo--margin banner__titulo">Lorem ipsum dolor sit amet consectetur.</h1>
            <p class="descripcion banner__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, et?</p>
            <p class="descripcion banner__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat.</p>
            <a href="#" class="cta cta--top banner__cta">Contactar</a>
        </div>
        <div class="banner__right">
            <img src="../jhosuaTheme/img/test.jpg" alt="" class="banner__imagen">
        </div>
    </div>
</section>

<section style="background: #23346F; height:300px" width="100%">
</section>

<section class="contenedor contenedor--top-100 contenedor--bottom-100">
    <h2 class="titulo form__titulo">Contactame</h2>
    <div class="form__flex">
        <div class="form__left">
            <img src="../jhosuaTheme/img/test.jpg" class="banner__imagen" alt="">
        </div>
        <form class="form">
            <div class="form__bloque form__bloque--nombre">
                <div class="form__relative">
                    <input name="nombre" id="nombre"  type="text" class="form__input">
                    <label for="nombre" class="form__label">Nombre</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="form__bloque form__bloque--email">
                <div class="form__relative">
                    <input name="email" id="email" type="email" class="form__input">
                    <label for="nombre" class="form__label">E-mail</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="form__bloque form__bloque--textarea">
                <div class="form__relative">
                    <textarea name="email" class="form__input"></textarea>
                    <label for="nombre" class="form__label">Mensaje</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <button class="cta bubbly-button">Enviar</button>

            <div class="form__error">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p class="form__parrafo--error">Por favor llene los campos de manera correcta</p>
            </div>

            <div class="form__enviado">
                <p class="form__parrafo--enviado">¡El formulario se ha enviado exitosamente!</p>
            </div>
        </form>
    </div>
</section>

<?php include 'footer.php' ?>