/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-03.js  ----------------
    -------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routesClase03 = [

    {
        id: 'clase03',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 3 - Práctica primeros pasos con jQuery",
        path: "/clase3-practica-primeros-pasos-con-jquery",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-03/00-practica-primeros-pasos.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 3 - Práctica primeros pasos con jQuery",
        styles: [
            { href: "/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/clase-03/00-practica-primeros-pasos.css" }
        ],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" },
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/clase-03/00-practica-primeros-pasos.js" }
        ]
    }
   

];
