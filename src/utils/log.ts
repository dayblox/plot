import { Socket, rooms } from "./state.js"

export const blue = "\x1b[94m"
export const green = "\x1b[92m"
export const reset = "\x1b[0m"

export function ask(socket: Socket, item: string, error?: boolean) {
	if (error)
		socket.send(`${green}Minimum length is 3 characters ${blue}>${reset}`)
	socket.send(`${green}Enter ${item} ${blue}>${reset}`)
}

export const info = (roomCode: string, room: Set<unknown>) =>
	`${green}Connected to room ${blue}${roomCode}${green} with ${playerCount(
		room.size - 1,
	)} ${blue}>${reset}`

export const logState = () =>
	console.table(
		Object.fromEntries(
			[...rooms.entries()].map(([code, users]) => [code, users.size]),
		),
	)

export const playerCount = (count: number) =>
	`${blue}${count > 0 ? count : "no"}${green} user${count !== 1 ? "s" : ""}`
