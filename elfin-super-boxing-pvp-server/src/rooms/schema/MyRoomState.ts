
import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "./Player";

export class MyRoomState extends Schema {

  @type("boolean") waitingForServer = false;
  @type({ map: Player }) players = new MapSchema<Player>();


  createPlayer(sessionId: string, props: any, playerId: any, characterId: any, userId: string, state: string, walletId: string, ticket: string, passCred: string) {
    console.log('createPlayer characterId :', characterId, '    playerId; ', playerId, '    walletId: ', walletId ? walletId : "");
    
    const player = new Player().assign(props?.data || props);
    player.posX = -9999;
    player.posY = -9999;
    player.hp = -9999;
    player.characterId = characterId;

    player.reserveSeat = false;
    player.userId = userId;
    player.state = state;
    player.walletId = walletId ? walletId : "";
    if(walletId > "")
      player.shortWalletId = walletId.substring(0, 10);
    player.ticket = ticket;
    player.passCred = passCred;
    player.sessionId = sessionId;
    player.playerId = playerId;
    this.players.set(sessionId, player);
    return player;
  }
}
