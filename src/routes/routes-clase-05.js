/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-05.js  ----------------
    -------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routesClase05 = [

    {
        id: 'clase05',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 5 - Introducción a jQuery",
        path: "/clase5-introduccion-a-jquery",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-05/00-introduccion-jquery.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 5 - Introducción a jQuery",
        styles: [
            { href: "/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/clase-05/00-introduccion-jquery.css" }
        ],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" },
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/clase-05/00-introduccion-jquery.js" }
        ]
    }
   

];
