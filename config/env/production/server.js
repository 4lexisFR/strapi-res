module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://res-backend-server.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })