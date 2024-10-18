"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importDefault(require("@colyseus/tools"));
const monitor_1 = require("@colyseus/monitor");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
/**
 * Import your Room files
 */
const MyRoom_1 = require("./rooms/MyRoom");
const BattleRoom_1 = require("./rooms/BattleRoom");
exports.default = (0, tools_1.default)({
    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('queue', MyRoom_1.MyRoom);
        gameServer.define('battleRoom', BattleRoom_1.BattleRoom).filterBy(['password']);
    },
    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         * Read more: https://expressjs.com/en/starter/basic-routing.html
         */
        const basicAuthMiddleware = (0, express_basic_auth_1.default)({
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
        app.use("/colyseus", basicAuthMiddleware, (0, monitor_1.monitor)());
        if (process.env.NODE_ENV !== "production") {
            //app.use("/", playground);
            app.use("/colyseus", (0, monitor_1.monitor)());
        }
    },
    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});
