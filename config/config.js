const path = require('path')
const rootPath = path.normalize(path.join() + '/..')
const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'chatnode'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://chatnode:chatnode@localhost/chatnode'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chatnode'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://chatnode:chatnode@localhost/chatnode'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chatnode'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/chatnode-production'
  }
}

module.exports = config[env]
