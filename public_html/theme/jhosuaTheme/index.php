<?php include 'header.php' ?>

<section class="banner">
    <div class="banner__absolute"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.90,93.25 C181.94,246.21 543.11,7.41 516.59,-45.89 L499.10,-5.42 L0.00,0.00 Z" style="stroke: none; fill: #c2e5fd;"></path></svg></div>
    <div class="banner__bloque contenedor contenedor--bottom contenedor--padding">
        <div class="banner__left">
            <h3 class="subtitulo banner__subtitulo">Lorem ipsum dolor sit</h3>
            <h1 class="titulo titulo--margin banner__titulo">Lorem ipsum dolor sit amet consectetur.</h1>
            <p class="descripcion banner__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, et?</p>
            <p class="descripcion banner__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat.</p>
            <a href="#contacto" class="cta cta--top banner__cta">Contactar</a>
        </div>
        <div class="banner__right">
            <img src="../jhosuaTheme/img/test.jpg" alt="" class="banner__imagen">
        </div>
    </div>
</section>

<!--PROYECTOS -->

<section class="proyectos__top" width="100%">
    <div class="proyectos__bloque">
        <h2 class="subtitulo">Los proyectos en los que he colaborado</h2>
        <p class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta recusandae ratione est, temporibus asperiores provident suscipit enim id ullam nemo doloribus blanditiis aliquid voluptatem, nostrum quae error omnis voluptatibus.</p>
    </div>
</section>

<section class="proyectos__grid contenedor contenedor--padding contenedor--proyectos">
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
    <div class="card">
        <div class="card__top">
            <img src="../jhosuaTheme/img/houston.svg" class="card__icono">
        </div>
        <div class="card__middle">
            <p class="card__descripcion descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis minus deleniti ipsum ducimus repudiandae!</p>
        </div>
        <div class="card__bottom">
            <a href="#" class="card__link">www.test.com</a>
        </div>
    </div>
</section>

<!-- FORMULARIO -->

<section class="contenedor contenedor--top-100 contenedor--bottom-100" id="contacto">
    <h2 class="titulo form__titulo">Contactame</h2>
    <div class="form__flex">
        <div class="form__left">
            <img src="../jhosuaTheme/img/test.jpg" class="banner__imagen form__imagen" alt="">
        </div>
        <form class="form">
            <div class="form__bloque form__bloque--nombre">
                <div class="form__relative">
                    <input autocomplete="off" name="nombre" id="nombre"  type="text" class="form__input">
                    <label for="nombre" class="form__label">Nombre</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="form__bloque form__bloque--email">
                <div class="form__relative">
                    <input autocomplete="off" name="email" id="email" type="email" class="form__input">
                    <label for="nombre" class="form__label">E-mail</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="form__bloque form__bloque--mensaje">
                <div class="form__relative">
                    <textarea name="mensaje" class="form__input"></textarea>
                    <label for="nombre" class="form__label">Mensaje</label>
                </div>
                <i class="fa-solid fa-circle-xmark form__icono form__icono--mal"></i>
                <i class="fa-solid fa-circle-check form__icono form__icono--bien"></i>
                <p class="form__mensaje-validacion">Lorem ipsum dolor sit amet.</p>
            </div>

            <button type="submit" class="cta bubbly-button">Contactar</button>

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