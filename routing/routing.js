import "https://unpkg.com/navigo";

import {renderPage} from "./templateLoading.js";
import {adjustForMissingHash, setActiveLink} from "./routingUtils.js";

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
                    await renderPage("./pages/frontPage/index.html");
                },
                "/testPage1" : async () => {
                    await renderPage("./pages/testPage1/index.html")
                }
            })
            .notFound(async () => {
                await renderPage("./pages/frontPage/index.html")
            })
            .resolve();
    });
}