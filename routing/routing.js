import "./navigo.js";

import {renderPage, renderTemplate} from "./templateLoading.js";
import {adjustForMissingHash, setActiveLink} from "./routingUtils.js";
import { initPageTwo } from "../pages/page-two/index.js";


export const setupRouting = async () => {
    window.addEventListener("load", async () => {
        const router = new Navigo("/", { hash: true });
        window.router = router;
        adjustForMissingHash();
        await router
            .hooks({
                before(done, match) {
                    setActiveLink("topnav", match.url);
                    done();
                },
            })
            .on({
                "/": async () => {
                    await renderPage("./pages/home-page/index.html");
                    //initHomePage();
                },
                "/page-one" : async () => {
                    await renderPage("./pages/page-one/index.html")
                    //initPageOne();
                },
                "/page-two" : async () => {
                    await renderPage("./pages/page-two/index.html")
                    initPageTwo();
                }
            })
            .notFound(() => renderTemplate("Page not found", "content"))
            .resolve();
    });
}