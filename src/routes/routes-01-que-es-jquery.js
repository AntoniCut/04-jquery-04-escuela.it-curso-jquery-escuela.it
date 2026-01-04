/*
    ---------------------------------------------------
    ----------  /jquery.antonydev.tech/  --------------
    ----------  /04-escuela.it/  ----------------------
    ----------  /curso-jquery-escuela.it/  ------------
    ----------  /src/routes/  -------------------------
    ----------  /routes-01-que-es-jquery.js  ----------
    ---------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routes01QueEsJQuery = [

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
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-01-que-es-jquery/00-que-es-jquery.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 1 - Que es jQuery",
        styles: [
            { href: "/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/00-home.css" }
        ],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" }
        ]
    }
   

];
