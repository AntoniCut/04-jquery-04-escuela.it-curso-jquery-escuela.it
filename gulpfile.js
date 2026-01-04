/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /gulpfile.js  -----------------------
    -------------------------------------------------
*/


import gulp from "gulp";
import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";
import { deleteAsync } from "del";


//  ----- ⚡ Versión con módulos ES + exclusiones  -----

/* 
    -------------------------------------------
    -----  📌  --  EXCLUSIONES GLOBALES  -----
    -------------------------------------------
*/

const EXCLUDES = [
    "!assets/**",
    "!src/**/.git/**",
    "!src/**/*.ts",
    "!src/**/*.map",
    "!node_modules/**",
    "!gulpfile.js",
    "!package.json",
    "!package-lock.json"
];


/* 
    -----------------------------------
    -----  🧹  --  LIMPIAR DIST  -----
    -----------------------------------
*/

export function clean() {
    return deleteAsync(["dist"]);
}


/* 
    -------------------------------------
    -----  🟨  --  JS – dist/src/  -----
    -------------------------------------
*/

export function minifyAllJs() {
    
    return gulp
        .src(
            ["src/**/*.js", ...EXCLUDES],
            { base: "." }
        )
        .pipe(terser())
        .pipe(gulp.dest("dist"));
}


/* 
    -------------------------------------
    -----  🟦  --  CSS – dist/src/  -----
    -------------------------------------
*/

export function minifyAllCss() {
    
    return gulp
        .src(
            ["src/**/*.css", ...EXCLUDES],
            { base: "." }
        )
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"));
}


/* 
    ------------------------------------------------------
    -----  🟥  --  index.html DE RAÍZ (MINIFICADO)  -----
    ------------------------------------------------------
*/

export function minifyRootIndex() {
    
    return gulp
        .src("index.html")
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
        )
        .pipe(gulp.dest("dist"));
}


/* 
    ---------------------------------------
    -----  🟥  --  HTML – dist/src/  -----
    ---------------------------------------
*/

export function minifyHtml() {
    
    return gulp
        .src(
            ["src/**/*.html", ...EXCLUDES],
            { base: "." }
        )
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
        )
        .pipe(gulp.dest("dist"));
}


/*
    --------------------------------------
    -----  📄  --  ARCHIVOS DE RAÍZ  -----
    -------------------------------------- 
*/

export function copyRootFiles() {
    
    return gulp
        .src(["manifest.json", "sw.js"])
        .pipe(gulp.dest("dist"));
}


/* 
    ---------------------------
    -----  🚀  --  BUILD  -----
    --------------------------- 
*/
export const build = gulp.series(
    clean,
    gulp.parallel(
        minifyAllJs,
        minifyAllCss,
        minifyRootIndex,
        minifyHtml,
        copyRootFiles
    )
);


//  -----  🔥  DEFAULT TASK  -----
export default build;
