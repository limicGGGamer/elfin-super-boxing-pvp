import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "./Player";

export class MyRoomState extends Schema {

  @type("boolean") waitingForServer = false;
  @type({ map: Player }) players = new MapSchema<Player>();


  createPlayer(sessionId: string, props: any, playerId: any, characterId: any, userId: string, state: string, walletId: string, ticket: string, passCred: string) {
    // console.log('createPlayer characterId :', characterId, '    playerId; ', playerId, '    walletId: ', walletId ? walletId : "");
    
    const player = new Player().assign(props?.data || props);
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
