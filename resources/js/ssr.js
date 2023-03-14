import { createInertiaApp } from "@inertiajs/svelte";
import createServer from "@inertiajs/svelte/server";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createServer((page) =>
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        page,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.svelte", {
                eager: true,
            });
            return pages[`./Pages/${name}.svelte`];
        },
    })
);
