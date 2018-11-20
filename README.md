## orbit-db-cache-postmsg-proxy

PostMessage Proxy Cache for orbit-db, wraps [orbit-db-cache](https://github.com/orbitdb/orbit-db-cache).

#### Use Case

If configured with [ipfs-postmsg-proxy](https://github.com/ipfs-shipyard/ipfs-postmsg-proxy), allows for all orbitdb state to be stored in iframe. Allowing the same store to be shared across domains. Minimizing syncs and times to load DBs. Reference [3box-js](https://github.com/uport-project/3box-js) for an example with implements this.

### Used in

* [orbit-db](https://github/com/orbitdb/orbit-db)

### Usage

#### Server

In the window you want to call to (**the "server"**):

```js
import { Server } from 'orbit-db-cache-postmsg-proxy'

Server()
```
#### Client

In the other window (**the "client"**):

```js
import { Client } from 'orbit-db-cache-postmsg-proxy'
import OrbitDB from 'orbit-db'
...

const cache = Client()
new OrbitDB(ipfs, orbitPath, {cache})
```
#### Client API

Reference [orbit-db-cache](https://github.com/orbitdb/orbit-db-cache)
