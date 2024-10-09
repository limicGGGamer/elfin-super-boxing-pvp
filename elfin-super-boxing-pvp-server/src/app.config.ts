import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import basicAuth from "express-basic-auth";

/**
 * Import your Room files
 */
import { MyRoom } from "./rooms/MyRoom";

export default config({

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('queue', MyRoom);

    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         * Read more: https://expressjs.com/en/starter/basic-routing.html
         */

        const basicAuthMiddleware = basicAuth({
            // list of users and passwords
            users: {
                "elfin-super-boxing-pvp": "colyseus",
            },
            // sends WWW-Authenticate header, which will prompt the user to fill
            // credentials in
            challenge: true
        });
        /**
         * Use @colyseus/playground
         * (It is not recommended to expose this route in a production environment)
         */
        app.use("/colyseus", basicAuthMiddleware, monitor());

        if (process.env.NODE_ENV !== "production") {
            //app.use("/", playground);
            app.use("/colyseus", monitor());
        }

    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});
