/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-00-home.js  -----------------
    -------------------------------------------------
*/



/** @typedef {import('../types/route-types.js').Route} Route */


/** - `path para las rutas` */
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
export const routes00Home = [

    {
        id: 'home',
        favicon: favicon,
        pageTitle: "Curso de jQuery Escuela.IT",
        path: "/",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/00-home.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Curso de jQuery de Escuela.IT",
        styles: [
            { href: `${styles}/pages/00-home.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    }
   

];
