import { Message } from '@open-wa/wa-automate'

export default async (message: Message): Promise<void> => {
  console.log(message.body)
}
