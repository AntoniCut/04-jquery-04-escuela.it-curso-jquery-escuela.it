/*
    -----------------------------------------------
    ----------  /jquery.antonydev.tech/  ----------
    ----------  /src/scripts/  --------------------
    ----------  /effect-loading-page.js  ----------
    -----------------------------------------------  
*/


/**
 * -----------------------------------
 * -----  `effectLoadingPage()`  -----
 * -----------------------------------
 * 
 * - Implementa un efecto de carga para la página web.
 * - Muestra un loader mientras se carga el contenido principal.
 * - Aplica transiciones suaves entre el loader y el contenido principal.
 * 
 */

export const effectLoadingPage = () => {


    console.log('\n')
    console.warn('-----  effect-loading-page.js  -----');
    console.log('\n');


    document.addEventListener('DOMContentLoaded', () => {

        /**  @type {HTMLDivElement|null} - `Elemento de Carga` */
        const loader = document.querySelector('#loader');   // Elemento de carga

        /** @type {HTMLDivElement|null} - `Elemento de Layout Principal` */
        const layout = document.querySelector('#layout');   // Contenedor principal

        // ---------- Verificar existencia de elementos ----------
        if (!loader || !layout) {
            console.error("Loader o layout no encontrado en el DOM");
            return;
        }


        // ---------- Retrasar la animación para simular carga ----------
        setTimeout(() => {

            //  -----  Mostrar layout  -----
            layout.style.display = "flex";

            //  -----  Aplicar transición de fade-in al layout  -----
            requestAnimationFrame(() => {
                layout.classList.add("fade-in");
            });

            //  -----  Aplicar fade-out al loader  -----
            loader.classList.add("fade-out");

            //  -----  Una vez que termina la transición del loader, ocultarlo  -----
            loader.addEventListener("transitionend", () => {
                loader.style.display = "none";
            }, { once: true });

        }, 1000);

    });

}
