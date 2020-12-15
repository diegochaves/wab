import { create } from '@open-wa/wa-automate'
import options from './options'
import start from './start'

create(options(true, start))
  .then(client => start(client))
  .catch(error => console.log(error))
