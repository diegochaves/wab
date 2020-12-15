import { Client }  from '@open-wa/wa-automate'
import { messageHandler } from './handlers'

export default function start(client: Client): void {
  console.log('[SERVER] Server Started!')
  client.onStateChanged((state) => {
    console.log('[Client State]', state)
    if (state === 'CONFLICT' || state === 'UNLAUNCHED')
      client.forceRefocus()
  })
  client.onMessage(async message => messageHandler(client, message))

  client.onIncomingCall(async (call) => {
    await client.sendText(call.peerJid, 'Não consigo receber chamadas. nelfon = bloco!')
    .then(() => client.contactBlock(call.peerJid))
  })
}
