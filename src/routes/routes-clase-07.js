/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-07.js  ----------------
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
    pages: '/04-escuela.it/curso-jquery-escuela.it/src/pages/clase-07-manipulacion-basica-de-elementos',
    layoutFooter: '/04-escuela.it/curso-jquery-escuela.it/src/components/layout/layout-footer.html',
    styles: '/04-escuela.it/curso-jquery-escuela.it/src/styles/pages/clase-07',
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
export const routesClase07 = [

    {
        id: 'clase07',
        favicon: favicon,
        pageTitle: "Clase 7 - Manipulación Básica de Elementos",
        path: "/clase7-manipulacion-basica-de-elementos",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/00-manipulacion-basica-de-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - Manipulación Básica de Elementos",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },

    {
        id: 'clase07HtmlText',
        favicon: favicon,
        pageTitle: "Clase 7 - 1. Métodos html() y text()",
        path: "/clase7-manipulacion-basica-de-elementos/01-metodos-html-text",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/01-metodos-html-text.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 1. Métodos html() y text()",
        styles: [
            { href: `${styles}/01-metodos-html-text.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/01-metodos-html-text.js` }
        ]
    },

    {
        id: 'clase07attrProp',
        favicon: favicon,
        pageTitle: "Clase 7 - 2. Métodos attr() y prop()",
        path: "/clase7-manipulacion-basica-de-elementos/02-metodos-attr-prop",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/02-metodos-attr-prop.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 2. Métodos attr() y prop()",
        styles: [
            { href: `${styles}/02-metodos-attr-prop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/02-metodos-attr-prop.js` }
        ]
    },


    {
        id: 'clase07dataRemoveData',
        favicon: favicon,
        pageTitle: "Clase 7 - 3. Métodos data() y removeData()",
        path: "/clase7-manipulacion-basica-de-elementos/03-metodos-data-removedata",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/03-metodos-data-removedata.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 3. Métodos data() y removeData()",
        styles: [
            { href: `${styles}/03-metodos-data-removedata.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/03-metodos-data-removedata.js` }
        ]
    },


    {
        id: 'clase07Each',
        favicon: favicon,
        pageTitle: "Clase 7 - 4. Método each() para recorrer elementos",
        path: "/clase7-manipulacion-basica-de-elementos/04-metodo-each-recorrer-elementos",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/04-metodo-each-recorrer-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 4. Método each() para recorrer elementos",
        styles: [
            { href: `${styles}/04-metodo-each-recorrer-elementos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/04-metodo-each-recorrer-elementos.js` }
        ]

    }

];
