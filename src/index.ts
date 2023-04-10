import { heartbeat, keepAlive } from "./utils/keepalive.js"
import { ask } from "./utils/log.js"
import {
	broadcastMessage,
	chooseNickname,
	chooseRoom,
	close,
} from "./utils/message.js"
import { Socket, newState } from "./utils/state.js"
import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: Number(process.env.PORT) })

wss.on("connection", (ws: Socket) => {
	const state = newState(ws)
	ask(ws, "Room Code")

	ws.on("message", (data) => {
		const message = data.toString()

		switch (state.status) {
			case "ROOM":
				return chooseRoom(message, state)
			case "NICKNAME":
				return chooseNickname(message, state)
			default:
				return broadcastMessage(message, state)
		}
	})

	ws.on("pong", heartbeat)
	ws.on("close", () => close(state))
})

const interval = keepAlive(wss)
wss.on("close", () => clearInterval(interval))
