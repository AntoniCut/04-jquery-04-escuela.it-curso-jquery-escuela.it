/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-04.js  ----------------
    -------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routesClase04 = [
    
    {
        id: 'clase04',
        favicon: "/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico",
        pageTitle: "Clase 4 - Como se organiza el curso de jQuery en Escuela.it",
        path: "/clase4-como-se-organiza-el-curso",
        components: {
            "#layoutHeader": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html",
            "#btnNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-04/00-como-se-organiza-el-curso.html",
            "#layoutFooter": "/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html",
        },
        headerTitle: "Clase 4 - Como se organiza el curso de jQuery en Escuela.it",
        styles: [],
        scripts: [
            { src: "/04-escuela.it/curso-jquery-escuela.it/src/scripts/tooltips.js" },
        ]
    }
   

];
