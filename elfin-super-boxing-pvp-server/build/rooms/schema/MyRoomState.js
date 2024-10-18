"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoomState = void 0;
const schema_1 = require("@colyseus/schema");
const Player_1 = require("./Player");
class MyRoomState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.waitingForServer = false;
        this.players = new schema_1.MapSchema();
    }
    createPlayer(sessionId, props, playerId, characterId, userId, state, walletId, ticket, passCred) {
        // console.log('createPlayer characterId :', characterId, '    playerId; ', playerId, '    walletId: ', walletId ? walletId : "");
        const player = new Player_1.Player().assign(props?.data || props);
        player.posX = 0;
        player.posY = 0;
        player.angle = 0;
        player.hp = 0;
        player.characterId = characterId;
        // player.reserveSeat = false;
        // player.userId = userId;
        // player.state = state;
        // player.walletId = walletId ? walletId : "";
        // if(walletId > "")
        //   player.shortWalletId = walletId.substring(0, 10);
        // player.ticket = ticket;
        // player.passCred = passCred;
        // player.sessionId = sessionId;
        // player.playerId = playerId;
        // this.players.set(sessionId, player);
        // console.log(`Player created: sessionId=${player.sessionId}, posX=${player.posX}, posY=${player.posY}, hp=${player.hp}`);
        // const player = new Player().assign(props?.data || props);
        // player.posx = 0;
        // player.posy = 0;
        // player.rot = 0;
        // player.arrowRot = 0;
        // player.playerRot = 0;
        // player.score = 0;
        player.playerId = playerId;
        player.reserveSeat = false;
        player.userId = userId;
        player.state = state;
        player.walletId = walletId;
        player.ticket = ticket;
        player.passCred = passCred;
        player.sessionId = sessionId;
        this.players.set(sessionId, player);
        return player;
    }
}
exports.MyRoomState = MyRoomState;
__decorate([
    (0, schema_1.type)("boolean")
], MyRoomState.prototype, "waitingForServer", void 0);
__decorate([
    (0, schema_1.type)({ map: Player_1.Player })
], MyRoomState.prototype, "players", void 0);
