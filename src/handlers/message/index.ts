import { Client, Message } from '@open-wa/wa-automate'
import commandHandler from '../command'

export default async (client: Client, message: Message): Promise<void> => {
  const {body, from} = message
  if (body.startsWith('!')) {
    commandHandler(message)
  }
  // await client.sendText(message.from, body.startsWith('!') ? 'comando' : 'erro')
  /* if (validCommand(body))
  if (message.body === 'Hi') {
    await client.sendText(message.from, 'Hello!')
  } */
}
