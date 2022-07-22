module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://res-backend-server.herokuapp.com/'),
    app: { 
      keys: "DmGwafWZ1MGxrAt7vqHOGg==,lRg5b70+AZaZdHq7qTrqYg==,OB9PblemhTv1uqeHQO5eig==,NZ8fScsGI5Jf0VTgEV0E2g=="
    },
  })