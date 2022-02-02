import { initializeDB } from "./database/services/initializeDB";
import { App } from "./app.global";

const app = new App();

    (async () => {
        await initializeDB();
        app.listen();
    })();