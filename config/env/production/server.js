module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://res-backend-server.herokuapp.com/'),
    app: { 
        keys: env.array("APP_KEYS", ["DATABASE_URL", "MY_HEROKU_URL", "NODE_ENV"]),
    },
  })