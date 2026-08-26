/* =========================================================
   PEWJAY OFFICIAL
   MAINTENANCE.JS

   MANUAL MAINTENANCE CONTROL

   true  = MAINTENANCE ON
   false = WEBSITE OPEN
   ========================================================= */


/* =========================================================
   MAINTENANCE SWITCH
   ========================================================= */

const MAINTENANCE_MODE = true;


/* =========================================================
   SETTINGS
   ========================================================= */

const HOME_PAGE = "home.html";

const MAINTENANCE_PAGE =
    "maintenance.html";


/* =========================================================
   CURRENT PAGE
   ========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


/* =========================================================
   PAGE READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Maintenance ON
         */

        if (MAINTENANCE_MODE === true) {

            if (
                currentPage !==
                MAINTENANCE_PAGE
            ) {

                window.location.replace(
                    MAINTENANCE_PAGE
                );

                return;

            }

        }


        /*
         * Maintenance OFF
         */

        if (MAINTENANCE_MODE === false) {

            if (
                currentPage ===
                MAINTENANCE_PAGE
            ) {

                window.location.replace(
                    HOME_PAGE
                );

                return;

            }

        }

    }
);