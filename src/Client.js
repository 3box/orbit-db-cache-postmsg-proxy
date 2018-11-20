const call = require( 'postmsg-rpc').call
const caller = require( 'postmsg-rpc').caller

class Cache {
  constructor (opts) {
    this.opts = opts
  }

  async open () {
    // TODO
    throw new Error('Not implemented')
  }

  async close () {
    // TODO
    throw new Error('Not implemented')
  }

  async destroy () {
    // TODO
    throw new Error('Not implemented')
  }

  async get (key) {
    const get = caller('get', this.opts)
    return await get(key)
  }

  async set (key, value) {
    const set = caller('set', this.opts)
    return await set(key, value)
  }

  async del (key) {
    // TODO
    throw new Error('Not implemented')
  }
}

const Start = (opts) => {
  return {
     load: async (directory, dbAddress) => {
       const load = caller('load', opts)
       await load(directory, dbAddress)
       return new Cache(opts)
     },
     close: async () => {
       throw new Error('Not implemented')
     },
   }
}

module.exports = Start
