import '@sapphire/plugin-logger/register'
import { container } from '@sapphire/pieces'
import Options from './config/options'

import * as dotenv from "dotenv"
dotenv.config({ path: __dirname+'/.env' })

import { Client } from './extensions/Client'

const client = new Client()
void client.login(process.env.TOKEN)

container.config = new Options()