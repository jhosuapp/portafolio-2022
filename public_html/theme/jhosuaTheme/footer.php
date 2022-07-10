<footer class="footer">
    <div class="footer__contenido">
        <h3 class="footer__subtitulo">
            <b>This footer sholudn't be here</b>
        </h3>
        <p>
            © 2021 Todos los Derechos reservados | Jhosua Penagos
        </p>
    </div>
    <div class="footer__iconos">
        <div class="iconos iconos--relative">
            <a class="iconos__links" href="#">
                <i class="fab fa-instagram icono-instagram icono-instagram--color" aria-hidden="true"></i>
            </a>
            <a class="iconos__links" href="#">
                <i class="fab fa-linkedin-in icono-likedin icono-likedin--color" aria-hidden="true"></i>
            </a>
            <a class="iconos__links" href="#">
                <i class="fab fa-twitter icono-twitter icono-twitter--color" aria-hidden="true"></i>
            </a>
            <a class="iconos__links" href="#">
                <i class="fab fa-telegram-plane icono-telegram icono-telegram--color" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</footer>

<!-- CHAT BOT -->
<?php
    include 'template-part/chat-bot.php'
?>

<!-- SCRIPTS -->

<script src="https://kit.fontawesome.com/2e5d66409c.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
 AOS.init({
	    duration: 1000,
	    easing: 'ease',
        once: true,
        delay: 20
  });
</script>
<script src="js/mainscript.js"></script>
