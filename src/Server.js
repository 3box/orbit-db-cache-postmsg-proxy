const expose = require('postmsg-rpc').expose
const Cache = require('orbit-db-cache')

let cache

const CacheService = {
  load: async (directory, dbAddress) => {
    cache = await Cache.load(directory, dbAddress)
    return
  },
  set: async (key, value) => {
    if (!cache) throw new Error('Load cache')
    return await cache.set(key,value)
  },
  get: async (key) => {
    const value = await cache.get(key)
    return value
  }
}

const Start = (opts) => {
  expose('load', CacheService.load, opts)
  expose('get', CacheService.get, opts)
  expose('set', CacheService.set, opts)
}

module.exports = Start
