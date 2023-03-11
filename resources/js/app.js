require("./bootstrap");

import { createInertiaApp } from "@inertiajs/svelte";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
    progress: {
        color: "#4B5563",
    },
});
