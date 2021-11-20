import { SapphireClient } from '@sapphire/framework'
import Options from '../config/options'

export class Client extends SapphireClient {
	public constructor() {
		super({
			caseInsensitiveCommands: true,
			caseInsensitivePrefixes: true,
			defaultPrefix: '-',
			intents: ['GUILDS', 'GUILD_MESSAGES'],
			loadDefaultErrorListeners: false,
			partials: ['CHANNEL'],
			allowedMentions: { parse: [] },
		})
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		config: Options
	}
}