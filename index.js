import {setupRouting} from "./routing/routing.js";
import {renderTemplate} from "./routing/templateLoading.js";

// Setup client-side routing
await setupRouting()

// Setup navigation bar
await renderTemplate("./components/navbar/index.html","topbar")

window.onerror = e => alert(e);

