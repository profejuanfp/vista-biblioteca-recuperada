document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".fondo");
    const loginForm = document.querySelector(".contenedor-form-login");
    const registerForm = document.querySelector(".contenedor-form-registro");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".registrar-link");
    const btn = document.querySelector(".btn-iniciar-sesion");
    const btnRegistrar = document.querySelector(".btn-registrar");
    const iconoCerrar = document.querySelector(".icono-cerrar");

// Mostrar formulario de registro
registerLink.addEventListener("click", (event) => {
    event.preventDefault();
    fondo.classList.remove('normal');
    fondo.classList.add('active'); // Mostrar el fondo
    loginForm.style.display = 'none'; // Ocultar login
    registerForm.style.display = 'block'; // Mostrar registro
});

// Mostrar formulario de inicio de sesión
loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    //fondo.classList.remove('active');  Mostrar el fondo
    fondo.classList.add('normal');
    registerForm.style.display = 'none'; // Ocultar registro
    loginForm.style.display = 'block'; // Mostrar login
});

//Botón de Iniciar Sesion ARRIBA
btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Botón de Iniciar Sesión clicado");
    fondo.classList.add('normal');
    registerForm.style.display = 'none'; // Ocultar registro
    loginForm.style.display = 'block'; // Mostrar login
});

// Botón de registrar grande
btnRegistrar.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Botón de Registrar clicado");
    fondo.classList.remove('active');
});

// Botón de cerrar
iconoCerrar.addEventListener("click", () => {
    fondo.classList.remove('active');
    fondo.classList.remove('normal');
    loginForm.style.display = 'none';  // Ocultar formulario de login
    registerForm.style.display = 'none'; // Ocultar formulario de registro
});
});