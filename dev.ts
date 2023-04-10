import env from "./env"

// @ts-ignore
process.env = {
	...process.env,
	...env,
}

type ENV = typeof env
declare global {
	namespace NodeJS {
		// @ts-ignore
		// rome-ignore lint/suspicious/noEmptyInterface:
		interface ProcessEnv extends ENV {}
	}
}
