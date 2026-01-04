/**
 * ----------------------------------------------
 * -----  Extensiones globales para jQuery  -----
 * ----------------------------------------------
 */

import type { JQueryStatic } from "jquery";


declare global {

    interface Window {
        jQuery: JQueryStatic;
    }
}

export { };
