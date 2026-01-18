/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-01.js  ----------------
    -------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routesClase01 = [

    {
        id: 'clase01',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 1 - Que es jQuery",
        path: "/clase1-que-es-jquery",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-01/00-que-es-jquery.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 1 - Que es jQuery",
        styles: [],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" }
        ]
    }
   

];
