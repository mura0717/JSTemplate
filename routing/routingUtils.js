/**
 * Only meant for when Navigo is set to use Hash based routing (Always this semester)
 * If users try to enter your site with only "/", it will change this to "/#/" as required
 * for Hash based routing
 * Call it before you start using the router (add the specific routes)
 */
export function adjustForMissingHash() {
    let path = window.location.hash;
    if (path == "") {
        //Do this only for hash
        path = "#/";
        window.history.pushState({}, path, window.location.href + path);
    }
}

/**
 * Sets active element on a div (or similar) containing a-tags (with data-navigo attributes ) used as a "menu"
 * Meant to be called in a before-hook with Navigo
 * @param topnav - Id for the element that contains the "navigation structure"
 * @param activeUrl - The URL which are the "active" one
 */
export function setActiveLink(topnav, activeUrl) {
    const el = document.getElementById(topnav)
    if(!el)
        return
    const links = el.querySelectorAll("a");
    links.forEach((child) => {
        child.classList.remove("active");
        //remove leading '/' if any
        if (child.getAttribute("href").replace(/\//, "") === activeUrl) {
            child.classList.add("active");
        }
    });
}