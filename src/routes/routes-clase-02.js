/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-02.js  ----------------
    -------------------------------------------------
*/


import { paths } from './paths.js';


/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


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

export const routesClase02 = [

    {
        id: 'clase02',
        favicon: favicon,
        pageTitle: "Clase 2 - Es Necesario Utilizar jQuery en la Actualidad",
        path: "/clase2-utilizar-jquery-en-la-actualidad",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-02-usar-jquery-en-la-actualidad/00-utilizar-jquery-en-la-actualidad.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 2 - Es Necesario Utilizar jQuery en la Actualidad",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    }
   

];
