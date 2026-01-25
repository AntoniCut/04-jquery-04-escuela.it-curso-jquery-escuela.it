/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-01.js  ----------------
    -------------------------------------------------
*/



/** @typedef {import('../types/route-types.js').Route} Route */


/** - `path para las rutas del curso de TypeScript` */
const paths = {
    favicon: '/04-escuela.it/curso-jquery-escuela.it/assets/favicon/jquery-favicon.ico',
    layoutHeader: '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-header.html',
    btnNavbar: '/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar.html',
    btnNavbarThemesJQueryUI: '/04-escuela.it/curso-jquery-escuela.it/src/components/buttons/btn-navbar-themes-jquery-ui.html',
    layoutNavbar: '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar.html',
    layoutNavbarThemesUI: '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-navbar-themes-jquery-ui.html',
    pages: '/04-escuela.it/curso-jquery-escuela.it/src/pages',
    layoutFooter: '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html',
    styles: '/04-escuela.it/curso-jquery-escuela.it/src/styles',
    scripts: '/04-escuela.it/curso-jquery-escuela.it/src/scripts',
}

/** - `Desestructuración de paths` */
const { 
    favicon, 
    layoutHeader, 
    btnNavbar, 
    btnNavbarThemesJQueryUI, 
    layoutNavbar, 
    layoutNavbarThemesUI, 
    pages, 
    layoutFooter, 
    styles, 
    scripts 
} = paths;


/** @type {Route[]} - `Array de objetos de tipo Route que definen las rutas de la aplicación SPA` */
export const routesClase01 = [

    {
        id: 'clase01',
        favicon: favicon,
        pageTitle: "Clase 1 - Que es jQuery",
        path: "/clase1-que-es-jquery",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-01/00-que-es-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 1 - Que es jQuery",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    }
   

];
