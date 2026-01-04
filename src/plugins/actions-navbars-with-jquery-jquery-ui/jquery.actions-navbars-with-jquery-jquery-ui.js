/*
    -----------------------------------------------------------------------
    ----------  /src/plugins/  --------------------------------------------
    ----------  /actions-navbars-with-jquery-jquery-ui  -------------------
    ----------  jquery.actions-navbars-with-jquery-jquery-ui.js  ----------
    -----------------------------------------------------------------------
*/



//@ts-nocheck
export const actionsNavbarsWithJQueryJQueryUIPlugins = () => {

    (($) => {

        
        $.fn.actionsNavbarsWithJQueryJQueryUI = function (options) {

            const settings = $.extend({
                menus: [],
                openEffect: 'slideDown',
                closeEffect: 'slideUp',
                duration: 250
            }, options);

            
            const menus = settings.menus.map(menu => {

                const $container = $(menu.container);
                const $btnOpen = $(menu.btnOpen);
                const $btnClose = $(menu.btnClose);

                // 🔒 RESET DE ESTADO (MUY IMPORTANTE EN SPA)
                $container.stop(true, true).hide();
                $btnOpen.show();
                $btnClose.hide();



                // 🛑 Evita que el click dentro cierre el menú
                $container.on('click', e => e.stopPropagation());


                /**  -----  Abrir Menú  -----  */
                const openMenu = () => {
                    
                    if ($container.is(':visible')) 
                        return;

                    $container.stop(true, true).slideDown(settings.duration);
                    $btnOpen.hide();
                    $btnClose.show();
                };


                /**  -----  Cerrar Menú  -----  */
                const closeMenu = () => {
                    
                    if (!$container.is(':visible')) 
                        return;

                    $container.stop(true, true).slideUp(settings.duration);
                    $btnOpen.show();
                    $btnClose.hide();
                };


                //  -----  Eventos del Botón Abrir  -----
                $btnOpen.on('click', e => {
                    
                    e.stopPropagation();
                    openMenu();

                    // Cierra otros menús
                    menus.forEach(m => {
                        if (m !== api) m.closeMenu();
                    });
                });

                //  -----  Evento del Botón Cerrar  -----
                $btnClose.on('click', e => {
                    e.stopPropagation();
                    closeMenu();
                });

                
                /**
                 * API object containing references to DOM elements and menu control functions.
                 * @typedef {Object} API
                 * @property {jQuery} container - jQuery object representing the menu container element
                 * @property {jQuery} btnOpen - jQuery object representing the button that opens the menu
                 * @property {jQuery} btnClose - jQuery object representing the button that closes the menu
                 * @property {Function} openMenu - Function to open the menu
                 * @property {Function} closeMenu - Function to close the menu
                 */
                
                const api = {
                    container: $container,
                    btnOpen: $btnOpen,
                    btnClose: $btnClose,
                    openMenu,
                    closeMenu
                };

                return api;
            });


            // 🛑 Limpia listener previo (SPA safe)
            $(document).off('click.actionsNavbars');


            //  -----  Cerrar al hacer click fuera  -----
            $(document).on('click.actionsNavbars', function (e) {
                menus.forEach(menu => {
                    if (
                        !$(e.target).closest(menu.container).length &&
                        !$(e.target).closest(menu.btnOpen).length &&
                        !$(e.target).closest(menu.btnClose).length
                    ) {
                        menu.closeMenu();
                    }
                });
            });

            return this;
        };

    })(jQuery);
};





//@ts-nocheck
// export const actionsNavbarsWithJQueryJQueryUIPlugins = () => {


//     /*
//        -------------------------------------------------------------------------------------
//        ----------  Función Anónima Autoejecutable que Encapsula el plugin jQuery  ----------
//        -------------------------------------------------------------------------------------
//    */

//     (($) => {


//         /**
//          * jQuery Plugin: actionsNavbarsWithJQueryJQueryUI
//          * --------------------------
//          * Convierte un conjunto de botones y contenedores en menús interactivos.
//          *
//          * @param {Object} options - Configuración del plugin
//          *   options.menus: Array de menús a inicializar
//          *     - container: Selector o jQuery del contenedor del menú
//          *     - btnOpen: Selector o jQuery del botón de abrir
//          *     - btnClose: Selector o jQuery del botón de cerrar
//          *   options.openEffect: Animación al abrir (default: 'slideDown')
//          *   options.closeEffect: Animación al cerrar (default: 'slideUp')
//          *   options.duration: Duración de las animaciones en ms (default: 250)
//          */

//         $.fn.actionsNavbarsWithJQueryJQueryUI = function (options) {

//             const settings = $.extend({
//                 menus: [],
//                 openEffect: 'slideDown',
//                 closeEffect: 'slideUp',
//                 duration: 250
//             }, options);

//             // Inicializar cada menú
//             const menus = settings.menus.map(menu => {
                
//                 const $container = $(menu.container).hide();
//                 const $btnOpen = $(menu.btnOpen);
//                 const $btnClose = $(menu.btnClose).hide();

//                 const openMenu = () => {
//                     if (settings.openEffect === 'slideDown') {
//                         $container.stop(true, true).slideDown(settings.duration);
//                     } else {
//                         $container.stop(true, true).show(settings.duration, settings.openEffect);
//                     }
//                     $btnOpen.hide();
//                     $btnClose.show();
//                 };

//                 const closeMenu = () => {
//                     if (settings.closeEffect === 'slideUp') {
//                         $container.stop(true, true).slideUp(settings.duration);
//                     } else {
//                         $container.stop(true, true).hide(settings.duration, settings.closeEffect);
//                     }
//                     $btnOpen.show();
//                     $btnClose.hide();
//                 };

//                 // Eventos de botones
//                 $btnOpen.on('click', e => {
//                     e.stopPropagation();
//                     openMenu();
//                     // Cerrar otros menús
//                     menus.forEach(m => {
//                         if (m !== menu) m.closeMenu();
//                     });
//                 });

//                 $btnClose.on('click', e => {
//                     e.stopPropagation();
//                     closeMenu();
//                 });

//                 return { container: $container, btnOpen: $btnOpen, btnClose: $btnClose, openMenu, closeMenu };
//             });

//             // Cerrar todos los menús al hacer click fuera
//             $(document).on('click', function (e) {
//                 menus.forEach(menu => {
//                     if (!$(e.target).closest(menu.container).length && !$(e.target).closest(menu.btnOpen).length) {
//                         menu.closeMenu();
//                     }
//                 });
//             });

//             return this; // Encadenable
//         };

//     })(jQuery);

// }




// $(function () {
    
//     $(document).actionsNavbarsWithJQueryJQueryUI({
//         menus: [
//             {
//                 container: '.navbar__container',
//                 btnOpen: '.navbar__btn-open',
//                 btnClose: '.navbar__btn-close'
//             },
//             {
//                 container: '#linksThemesContainer',
//                 btnOpen: '.navbar-ui__btn-open',
//                 btnClose: '.navbar-ui__btn-close'
//             }
//         ],
//         openEffect: 'slideDown',    // o 'explode', 'blind', etc.
//         closeEffect: 'explode',     // efecto al cerrar
//         duration: 300
//     });
// });



