import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

const instanceLocator = 'v1:us1:166f12c1-f36e-4ed0-893f-553abe614333'
const tokenUrl = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/166f12c1-f36e-4ed0-893f-553abe614333/token'
const room = {
   work: '61954415-3a85-4a1f-aa3c-96b1b5cae531'
}

const chatManager = new ChatManager({
   instanceLocator,
   userId: 'marian',
   tokenProvider: new TokenProvider({
      url: tokenUrl
   }),
   connectionTimeout: 5000
})

export { chatManager, room }
