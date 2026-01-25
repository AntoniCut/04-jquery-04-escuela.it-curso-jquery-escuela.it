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

export const routesClase06 = [

    {
        id: 'clase06Ejemplo1',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 1",
        path: "/clase6-primeros-pasos-ejemplo1",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-06/01-ejemplo1.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 1",
        styles: [
            { href: "/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/clase-06/01-ejemplo1.css" }
        ],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" },
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/clase-06/01-ejemplo1.js" }
        ]
    },


    {
        id: 'clase06Ejemplo2',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 2",
        path: "/clase6-primeros-pasos-ejemplo2",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-06/02-ejemplo2.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 2",
        styles: [
            { href: "/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/clase-06/02-ejemplo2.css" }
        ],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" },
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/clase-06/02-ejemplo2.js" }
        ]
    }
   

];
