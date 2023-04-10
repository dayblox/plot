import { Socket } from "./state.js"
import { WebSocketServer } from "ws"

export const keepAlive = (wss: WebSocketServer) =>
	setInterval(
		() =>
			wss.clients.forEach((ws: Socket) => {
				if (ws.isAlive === false) return ws.terminate()
				ws.isAlive = false
				ws.ping()
			}),
		30_000,
	)

export function heartbeat() {
	this.isAlive = true
}
